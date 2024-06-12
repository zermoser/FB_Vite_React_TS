import React, { useState } from 'react';
import ImagePost from './ImagePost';

interface Post {
  id: number;
  src: string;
  alt: string;
  user: string;
  comments: { text: string; timestamp: string }[];
  likes: number;
}

const ImageFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      src: 'https://imgix.ranker.com/list_img_v2/9099/309099/original/the-absolute-best-of-the-business-cat-meme',
      alt: 'Image',
      user: 'Maew',
      comments: [
        { text: "Cool cat", timestamp: "Tuesday, 11 June 2024, 10:34:23" },
        { text: "OMG !", timestamp: "Wednesday, 12 June 2024, 11:24:53" },
        { text: "So Cool Cat :)", timestamp: "Wednesday, 12 June 2024, 11:24:53" }
      ],
      likes: 999
    },
    {
      id: 2,
      src: 'https://img.freepik.com/free-vector/funny-serious-cat-animal-meme_23-2148974916.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user',
      alt: 'Image',
      user: 'Cat Meaw',
      comments: [],
      likes: 10000000
    },
    {
      id: 3,
      src: 'https://cdn.onemars.net/sites/dreamies_th_r81SA_r9CA/image/why-do-cats-bite_1694524993557.jpeg',
      alt: 'Image',
      user: 'Meaw',
      comments: [{ text: "Cute ♥", timestamp: "Tuesday, 11 June 2024, 10:34:23" }],
      likes: 3
    },
    {
      id: 4,
      src: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
      alt: 'Image',
      user: 'Adorable Cat',
      comments: [{ text: "Adorable >_<", timestamp: "Tuesday, 11 June 2024, 10:34:23" }],
      likes: 48
    },
    {
      id: 5,
      src: 'https://imgflip.com/s/meme/Cute-Cat.jpg',
      alt: 'Image',
      user: 'Lovely Cat',
      comments: [{ text: "Lovely :D", timestamp: "Tuesday, 11 June 2024, 10:34:23" }],
      likes: 6
    },
    {
      id: 6,
      src: 'https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg',
      alt: 'Image',
      user: 'Jane Smith',
      comments: [{ text: "Great photo!", timestamp: "Tuesday, 11 June 2024, 10:34:23" }],
      likes: 14
    },
  ]);

  const addComment = (postId: number, text: string) => {
    const timestamp = new Date().toLocaleString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { text, timestamp }] }
          : post
      )
    );
  };

  const updateLikes = (postId: number, likes: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes } : post
      )
    );
  };

  return (
    <div className="p-4 w-full flex-1 overflow-y-auto">
      {posts.map((post) => (
        <ImagePost
          key={post.id}
          src={post.src}
          alt={post.alt}
          user={post.user}
          comments={post.comments}
          likes={post.likes}
          onAddComment={(text: string) => addComment(post.id, text)}
          onLikeChange={(likes: number) => updateLikes(post.id, likes)}
        />
      ))}
    </div>
  );
};

export default ImageFeed;
