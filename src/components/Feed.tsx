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
      user: 'Maew'
    },
    {
      src: 'https://cdn.onemars.net/sites/dreamies_th_r81SA_r9CA/image/why-do-cats-bite_1694524993557.jpeg',
      alt: 'Image',
      user: 'Hello I am Good Guy'
    },
    {
      src: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
      alt: 'Image',
      user: 'Cat za'
    },
    {
      src: 'https://imgflip.com/s/meme/Cute-Cat.jpg',
      alt: 'Image',
      user: 'Mew Mew'
    },
    {
      src: 'https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg',
      alt: 'Image',
      user: 'Cat Maew'
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
