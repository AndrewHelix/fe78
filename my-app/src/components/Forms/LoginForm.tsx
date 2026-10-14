import { useState } from 'react';
import { Input } from '../Input';
import { FormLayout } from './FormLayout';

export const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
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
