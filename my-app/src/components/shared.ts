import styled, { css } from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const InputSharedStyles = css<{ $hasError: boolean }>`
  width: 100%;
  box-sizing: border-box;

  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : 'gray')};
  border-radius: 3px;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: #f5deb3;
  }

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? 'red' : 'gray')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #a9a9a9;
  }
`;
