import React, { useState } from 'react';

interface ImagePostProps {
  src: string;
  alt: string;
  user: string;
}

const ImagePost: React.FC<ImagePostProps> = ({ src, alt, user }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white">
          {user[0].toUpperCase()}
        </div>
        <span className="ml-2 font-bold">{user}</span>
      </div>
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      <div className="flex justify-between items-center mt-2">
        <button className="text-blue-500" onClick={handleLike}>Like {likes}</button>
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
