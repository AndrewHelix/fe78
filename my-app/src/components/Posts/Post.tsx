import { useEffect, useState } from 'react';

import type { Post } from './types';
import { Title } from './styles';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Button } from '../Button/Button';

export const PostView = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  const isValidId = id !== undefined && !Number.isNaN(+id);

  useEffect(() => {
    fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
      .then((res) => res.json())
      .then((post: Post) => setPost(post))
      .catch(() => setHasError(true));
  }, [id]);

  if (!isValidId) {
    return <Navigate to={'/posts'} replace />;
  }

  if (hasError) {
    return <h1>SMTH WENT WRONG</h1>;
  }

  return (
    <>
      <Title>{post?.title}</Title>
      <p>{post?.text}</p>
      <p>{post?.description}</p>
      <Button
        content="Back to posts"
        variant="primary"
        isActive
        onClick={() => navigate(-1)} // navigate('/posts')
      />
    </>
  );
};
