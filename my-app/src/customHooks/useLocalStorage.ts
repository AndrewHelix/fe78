import { useState } from 'react';

export const useLocalStorage = <T extends string>(
  key: string,
  defaultValue: T,
): [T, (param: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    const storageValue = localStorage.getItem(key) as T;
    console.log('get info from ls');
    return storageValue || defaultValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
};
