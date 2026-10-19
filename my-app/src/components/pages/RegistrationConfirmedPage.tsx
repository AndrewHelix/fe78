import { Button } from '../Button/Button';
import { usePageTitle } from '../../customHooks/usePageTitle';

export const RegistrationConfirmedPage = () => {
  usePageTitle('Registration Confirmation');

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat
        perferendis voluptatum, natus atque perspiciatis accusantium sit quo
        dignissimos maxime! Atque, earum non? Iure natus eum corporis, rerum
        accusamus iste.
      </p>
      <Button
        content={'Back to main page'}
        variant={'primary'}
        onClick={() => {}}
        isActive
      />
    </>
  );
};
