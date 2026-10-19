import { useContext, useEffect } from 'react';
import { PageTitleContext } from '../context/pageTitleContext';

export const usePageTitle = (title: string) => {
  const pageTitleContext = useContext(PageTitleContext);

  if (!pageTitleContext) {
    throw new Error('Use context inside Provider');
  }

  const { setTitle } = pageTitleContext;

  useEffect(() => {
    setTitle(title);
  }, []);
};
