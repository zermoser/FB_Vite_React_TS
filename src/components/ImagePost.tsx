import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './ImagePost.module.css'

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
  const [isLoading, setIsLoading] = useState(false);

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

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setIsLoading(true);
      try {
        // Simulate API request to add comment
        setComments([...comments, comment]);
        setComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
        // Handle error
      } finally {
        setIsLoading(false);
      }
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
        {showHeart && <FaHeart className={styles.heartIcon} />}
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
      <form onSubmit={handleCommentSubmit} className="mt-2 flex items-center">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg mr-2"
          placeholder="Add a comment..."
          disabled={isLoading} // Disable input while submitting comment
        />
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ul className="mt-2">
        {comments.map((comment, index) => (
          <li key={index} className="flex items-start mt-4 mb-2">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mr-2">
              {comment[0].toUpperCase()}
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 rounded-lg p-2">
                <p className="text-sm text-gray-700">{comment}</p>
              </div>
              <p className="text-xs text-gray-500"> วัน xx xxxxxx xxxx : เวลา xx.xx</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagePost;
