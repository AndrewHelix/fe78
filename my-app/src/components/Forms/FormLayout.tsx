import styled from 'styled-components';
import { Button } from '../Button/Button';
import type { ReactNode } from 'react';

export const FormLayout = ({
  content,
  onClick,
  buttonText,
  // additionalUI,
}: {
  content: ReactNode;
  buttonText: string;
  // additionalUI: ReactNode;
  onClick: () => void;
}) => {
  const handleClick = (e: SubmitEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Root>
      {content}
      {/* {additionalUI} */}
      <Button
        onClick={handleClick}
        content={buttonText}
        isActive
        variant={'primary'}
        type="submit"
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
