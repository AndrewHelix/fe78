import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useToggle } from '../customHooks/useToggle';

export const InputWithRef = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const renderCountRef = useRef(0);

  const timerIdRef = useRef(0);

  const startTimer = () => {
    timerIdRef.current = setTimeout(() => {}, 1500);
  };

  const stopTimes = () => {
    clearTimeout(timerIdRef.current);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const UserContext = createContext<{ name: string } | null>(null);
export const DrillingExample = () => {
  const user = { name: 'JJJJJJJJJJ' };

  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
};

function Layout() {
  return <Sidebar />;
}

function Sidebar() {
  const user = useContext(UserContext);

  return (
    <>
      <div>sidebar: {user?.name}</div>
      <UserInfo />
    </>
  );
}

function UserInfo() {
  const user = useContext(UserContext);
  return <div>UserInfo: {user?.name}</div>;
}

export function Modal() {
  const [isOpen, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isOpen ? 'close' : 'open'} modal</button>
      {isOpen && <p>MODAL WINDOW</p>}
    </div>
  );
}
