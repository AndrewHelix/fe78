import styled from 'styled-components';
import { Field, InputSharedStyles, Label } from './shared';

type Props = {
  label: string;
  error?: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
};

export const Textarea = ({ id, error, placeholder, label }: Props) => {
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextarea $hasError={!!error} id={id} placeholder={placeholder} />
    </Field>
  );
};

const StyledTextarea = styled.textarea<{ $hasError: boolean }>`
  ${InputSharedStyles}
  min-height: 120px;
`;
