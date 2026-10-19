import { createContext } from 'react';

interface PageTitleContextValue {
  title: string;
  setTitle: (title: string) => void;
}

export const PageTitleContext = createContext<PageTitleContextValue | null>(
  null,
);
