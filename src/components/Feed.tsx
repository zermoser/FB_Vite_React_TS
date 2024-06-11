import React from 'react';
import ImagePost from './ImagePost';

const Feed: React.FC = () => {
  const posts = [
    {
      src: 'https://imgix.ranker.com/list_img_v2/9099/309099/original/the-absolute-best-of-the-business-cat-meme',
      alt: 'Image',
      user: 'คนเท่'
    },
    {
      src: 'https://img.freepik.com/free-vector/funny-serious-cat-animal-meme_23-2148974916.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user',
      alt: 'Image',
      user: 'แมวเหมียว'
    },
    {
      src: 'https://cdn.onemars.net/sites/dreamies_th_r81SA_r9CA/image/why-do-cats-bite_1694524993557.jpeg',
      alt: 'Image',
      user: 'Hello I am Good Guy'
    }
  ];

  return (
    <div className="p-4 w-full flex-1 overflow-y-auto">
      {posts.map((post, index) => (
        <ImagePost key={index} src={post.src} alt={post.alt} user={post.user} />
      ))}
    </div>
  );
};

export default Feed;
