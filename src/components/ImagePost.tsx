import React from 'react';

interface ImagePostProps {
  src: string;
  alt: string;
  user: string;
}

const ImagePost: React.FC<ImagePostProps> = ({ src, alt, user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white">
          {user[0].toUpperCase()}
        </div>
        <span className="ml-2 font-bold">{user}</span>
      </div>
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
    </div>
  );
};

export default ImagePost;
