import styled from 'styled-components';
import { Field, InputSharedStyles, Label } from './shared';

type InputType = 'text' | 'password' | 'email';

type Props = {
  label: string;
  type?: InputType;
  error?: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
};

export const Input = ({
  label,
  type = 'text',
  error,
  id,
  placeholder,
  disabled,
}: Props) => {
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        type={type}
        id={id}
        $hasError={!!error}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Field>
  );
};

const StyledInput = styled.input<{ $hasError: boolean }>`
  ${InputSharedStyles}
  height: 48px;
  padding: 0 14px;
  background-color: white;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: red;
`;
