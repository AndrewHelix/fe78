import { Input } from '../Input';
import { FormLayout } from './FormLayout';
import { usePageTitle } from '../../customHooks/usePageTitle';

export const RegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  usePageTitle('Registration');

  const handleClick = () => {
    onSuccess();
  };

  return (
    <FormLayout
      content={
        <>
          <Input label={'Name'} id={'Name'} placeholder={'Name'} />
          <Input
            label={'Email'}
            id={'Email'}
            placeholder={'Email'}
            type="email"
          />
          <Input
            label={'Password'}
            id={'password'}
            placeholder={'Password'}
            type="password"
          />
          <Input
            label={'Confirm Password'}
            id={'confirm-password'}
            placeholder={'Confirm Password'}
            type="password"
          />
        </>
      }
      // additionalUI={<></>}
      onClick={handleClick}
      buttonText="Sing Up"
    />
  );
};
