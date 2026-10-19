import { useRef, useState } from 'react';
import { Input } from '../Input';
import { FormLayout } from './FormLayout';

export const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!email.trim()) {
      inputEmailRef.current?.focus();
      return;
    }

    if (!password.trim()) {
      inputPasswordRef.current?.focus();
      return;
    }

    onSuccess();

    console.log({
      email,
      password,
    });
  };

  return (
    <FormLayout
      content={
        <>
          <Input
            ref={inputEmailRef}
            label={'Email'}
            id={'Email'}
            placeholder={'Email'}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            ref={inputPasswordRef}
            label={'Password'}
            id={'password'}
            placeholder={'Password'}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </>
      }
      // additionalUI={<></>}
      onClick={handleClick}
      buttonText="Sign In"
    />
  );
};
