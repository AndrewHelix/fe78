import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>PLUS PLUS</button>
    </div>
  );
};

export const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Search value: {search}</p>
    </div>
  );
};

type Post = {
  id: number;
  title: string;
  body: string;
};

const posts: Post[] = [
  { id: 1, title: 'First post', body: 'Post body example' },
  { id: 2, title: 'Second post', body: 'Post body example' },
  { id: 3, title: 'Third post', body: 'Post body example' },
];

const PostCard = ({ post }: { post: Post }) => {
  if (post.title === 'First post') {
    return null;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export const Posts = () => {
  return (
    <div>
      {posts.length ? (
        <>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </>
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
};

enum SortOption {
  Newest = 'newest',
  Oldest = 'oldest',
  Title = 'title',
}

export const Select = () => {
  const [sort, setSort] = useState(SortOption.Title);
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value as SortOption)}
    >
      <option value={SortOption.Newest}>Newest</option>
      <option value={SortOption.Oldest}>Oldest</option>
      <option value={SortOption.Title}>Title</option>
    </select>
  );
};
