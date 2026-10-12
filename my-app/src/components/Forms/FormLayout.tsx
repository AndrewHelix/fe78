import styled from 'styled-components';
import { Button } from '../Button/Button';
import type { ReactNode, SyntheticEvent } from 'react';

export const FormLayout = ({
  content,
  onClick,
  // additionalUI,
}: {
  content: ReactNode;
  // additionalUI: ReactNode;
  onClick: () => void;
}) => {
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Root>
      {content}
      {/* {additionalUI} */}
      <Button
        onClick={handleClick}
        content="Sign Up"
        isActive
        variant={'primary'}
      />
    </Root>
  );
};

const Root = styled.form`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 0 auto;
`;
