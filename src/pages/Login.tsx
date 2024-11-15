import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios"; // Import Axios
import Swal from "sweetalert2";
import Modal from "react-modal"; // Import Modal from react-modal
import { UserContext } from "../context/UserContext";

interface LoginProps {
  onLogin: (username: string, password: string) => Promise<void>;
}

// Modal styles
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
    width: "80%",
    maxWidth: "500px",
  },
};

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true); // Modal state initialized to true
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically open the modal when the component mounts
    setModalIsOpen(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log("response", response);
      dispatch({ type: "SET_USER", payload: username });
      navigate("/home");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row">
        <div className="hidden lg:block w-1/2 lg:w-1/3">
          <img
            src="https://zermoser.github.io/assets/images/MosProfile.jpg"
            className="object-cover h-[273px]"
            alt="Login Image"
          />
        </div>

        <div className="w-full lg:w-2/3 px-4 lg:px-8 py-8 lg:py-0">
          <form
            className="bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleLogin}
          >
            <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
              My Social Media
            </h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="relative mb-4">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 transform -translate-y-1/2 right-4 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="text-lg font-bold text-center mb-4">
          Hello ! Welcome to My Social Media
        </h2>
        <p className="text-center">
          This is an example of a username and password to login
        </p>
        <p className="text-center">
          to connect to the API at{" "}
          <a
            className="text-blue-500"
            href="https://dummyjson.com/docs/auth"
            target="_blank"
          >
            https://dummyjson.com/docs/auth
          </a>
        </p>
        <div className="text-center mt-4">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
