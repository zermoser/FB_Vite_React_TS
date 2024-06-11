import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './ImagePost.css';

interface ImagePostProps {
  src: string;
  alt: string;
  user: string;
}

const ImagePost: React.FC<ImagePostProps> = ({ src, alt, user }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [isLikePending, setIsLikePending] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = () => {
    if (isLikePending) return; // Prevent multiple like actions
    setIsLikePending(true); // Set like action in progress
    setLikes(likes + (isLiked ? -1 : 1)); // Toggle like
    setIsLiked(!isLiked);
    setShowHeart(true); // Show heart icon
    setTimeout(() => {
      setIsLiked(false); // Hide heart after 1 second
      setIsLikePending(false); // Allow like action again
      setShowHeart(false); // Hide heart icon
    }, 1000);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 relative">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white">
          {user[0].toUpperCase()}
        </div>
        <span className="ml-2 font-bold">{user}</span>
      </div>
      <div className="image-container relative">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg cursor-pointer"
          onClick={handleLike}
        />
        {showHeart && (
          <FaHeart className="heart-icon" />
        )}
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="text-blue-500"
          onClick={handleLike}
          disabled={isLikePending} // Disable like button while like action is in progress
        >
          <FaHeart color={isLiked ? 'red' : 'inherit'} /> Like {likes}
        </button>
      </div>
      <form onSubmit={handleCommentSubmit} className="mt-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Add a comment..."
        />
      </form>
      <ul className="mt-2">
        {comments.map((c, index) => (
          <li key={index} className="text-sm text-gray-700">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagePost;
