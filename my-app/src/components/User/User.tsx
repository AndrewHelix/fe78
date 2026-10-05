import classes from './User.module.css';

type Props = {
  username: string;
};

export const User = ({ username }: Props) => {
  const initials = username
    .trim()
    .split(' ')
    .map((str) => str[0])
    .join('')
    .toUpperCase();

  return (
    <div className={classes.user}>
      <div className={classes.avatar}>{initials}</div>
      <div className={classes.name}>{username}</div>{' '}
    </div>
  );
};
