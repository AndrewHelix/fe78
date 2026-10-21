import { useEffect, useState } from 'react';
import type { Post, PostsResponse } from './types';
import styled from 'styled-components';
import { Title } from './styles';
import { Link } from 'react-router';

export const Posts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=100')
      .then((res) => res.json())
      .then((res: PostsResponse) => {
        setPosts(res.results);
      })
      .catch(() => setHasError(true));
  }, []);

  if (hasError) {
    return <h2>SMTH WENT WRONG</h2>;
  }

  return (
    <Root>
      {posts?.map((post) => (
        <PostWrapper key={post.id}>
          <Title>{post.title}</Title>
          <p>{post.text}</p>
          <p>{post.description}</p>
          <OpenPostLink to={`/posts/${post.id}`}>OPEN POST</OpenPostLink>
        </PostWrapper>
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostWrapper = styled.div`
  border: 1px solid black;
  border-radius: 6px;
`;

const OpenPostLink = styled(Link)`
  color: #7fff00;

  &:hover {
    opacity: 0.5;
  }
`;
