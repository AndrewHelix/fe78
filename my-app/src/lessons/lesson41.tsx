import { memo, use, useCallback, useEffect, useMemo, useState } from 'react';

export function User() {
  const [user, setUser] = useState({
    name: 'Alex',
    age: 20,
  });
  const [count, setCount] = useState(0);

  // const [users, setUsers] = useState([
  //   {
  //     name: 'Alex',
  //     age: 20,
  //   },
  // ]);

  const handleClick = () => {
    setUser({
      ...user,
      age: 30,
    });
    // eslint-disable-next-line react-hooks/immutability
    // user.age = 30;
    // console.log(user);

    // setUsers([...users, { name: 'Alex', age: 20 }]);
    // users.push({ name: 'Alex', age: 20 });
  };

  //componentDidMount
  // useEffect(() => {
  //   console.log('componentDidMount');
  //   // const itervalId = setInterval(() => {
  //   //   console.log('interval');
  //   // }, 1000);
  //   const handleResize = () => {
  //     console.log(window.innerHeight);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   //componentWillUnmount
  //   return () => {
  //     // clearInterval(itervalId);
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  //componentDidUpdate
  // useEffect(() => {
  //   console.log('componentDidUpdate');

  //   return () => {
  //     console.log('componentDidUpdate cleanup function');
  //   };
  // }, [user]);

  // useEffect(() => {
  //   console.log('bad case');
  // });

  return (
    <div>
      <p>user name: {user.name}</p>
      <p>user age: {user.age}</p>
      <button onClick={handleClick}>change user</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        button count: {count}
      </button>
    </div>
  );
}

export function UserWrapper() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    return null;
  }

  return (
    <>
      <User />
      <br />
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </>
  );
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const SelectedPost = memo(function ({ postId }: { postId: number }) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!postId) {
      return;
    }

    const loadPosts = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const post: Post = await res.json();
      setPost(post);
    };

    loadPosts();
  }, [postId]);

  // const loadPosts = useCallback(async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${postId}`,
  //   );
  //   const post: Post = await res.json();
  //   setPost(post);
  // }, [postId]);

  console.log('child render');

  return (
    <>
      {/* <button onClick={() => loadPosts}>click</button> */}
      <div>
        post id: <h2>{post?.id}</h2>
        post title: <h3>{post?.title}</h3>
        post body: <p>{post?.body}</p>
      </div>
    </>
  );
});

export function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [, setState] = useState(0);
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts: Post[] = await res.json();
      setPosts(posts);
    };

    loadPosts();
  }, []);

  const user1Posts = useMemo(
    () =>
      posts?.filter((post) => {
        return post.userId === 1;
      }),
    [posts],
  );
  console.log('parent render');

  // const arr = useMemo(
  //   () =>
  //   [1, 2, 3, 4, 5, ..., 1000].map(el => el * el),
  //   [],
  // );

  if (!user1Posts) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <button onClick={() => setState(Math.random())}>set state</button>
      <button onClick={() => setPostId(postId + 1)}>next id</button>
      {/* {user1Posts.map((post) => (
        <div key={post.id}>
          post title: <h3>{post.title}</h3>
          post body: <p>{post.body}</p>
        </div>
      ))} */}
      <SelectedPost postId={postId} />
    </>
  );
}

export function Parent() {
  const [, setState] = useState(0);

  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <>
      <button onClick={() => setState(Math.random())}>set state</button>
      <h2>PARENT COMPONENT</h2>
      <br />
      <br />
      <br />
      <ChildComponent onClick={handleClick} />;
    </>
  );
}

const ChildComponent = memo(function ChildComponent({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log('child render');
  return <h1 onClick={onClick}>CHILD COMPONENT</h1>;
});
