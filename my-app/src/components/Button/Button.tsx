import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'secondary2';

type Props = {
  content: string;
  isActive?: boolean;
  variant: ButtonVariant;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (arg: any) => void;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  content,
  isActive,
  variant,
  onClick,
  type,
}: Props) => {
  return (
    <button
      className={`button button--${variant}`}
      disabled={!isActive}
      onClick={onClick}
      // style={{
      //   color: 'white',
      //   padding: '20px',
      // }}
      type={type || 'button'}
    >
      {content}
    </button>
  );
};
