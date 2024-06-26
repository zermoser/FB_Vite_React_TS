import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './ImagePost.module.css';

interface ImagePostProps {
  src: string;
  alt: string;
  user: string;
  comments: { text: string; timestamp: string }[];
  likes: number;
  onAddComment: (text: string) => void;
  onLikeChange: (likes: number) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

const ImagePost: React.FC<ImagePostProps> = ({ src, alt, user, comments: defaultComments, likes: defaultLikes, onAddComment, onLikeChange }) => {
  const [likes, setLikes] = useState(defaultLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [isLikePending, setIsLikePending] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<{ text: string; timestamp: string }[]>(defaultComments);

  const handleLike = () => {
    if (isLikePending) return;
    setIsLikePending(true);
    const newLikes = likes + (isLiked ? -1 : 1);
    setLikes(newLikes);
    setIsLiked(!isLiked);
    setShowHeart(true);
    onLikeChange(newLikes);
    setTimeout(() => {
      setIsLikePending(false);
      setShowHeart(false);
    }, 1000);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setIsLoading(true);
      try {
        const timestamp = new Date().toLocaleString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        });
        setComments([...comments, { text: comment, timestamp }]);
        onAddComment(comment); // Notify parent component
        setComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
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
          disabled={isLikePending}
        >
          <FaHeart color={isLiked ? 'red' : 'inherit'} /> Like {formatNumber(likes)}
        </button>
      </div>
      <form onSubmit={handleCommentSubmit} className="mt-2 flex items-center">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg mr-2"
          placeholder="Add a comment..."
          disabled={isLoading}
        />
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ul className="mt-2">
        {comments.map((comment, index) => (
          <li key={index} className="flex items-start mt-4 mb-2">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mr-2">
              {comment.text[0].toUpperCase()}
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 rounded-lg p-2">
                <p className="text-sm text-gray-700">{comment.text}</p>
              </div>
              <p className="text-xs text-gray-500">{comment.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagePost;
