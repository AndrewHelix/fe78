export type AppTheme = {
  colors: {
    background: string;
    text: string;
  };
};

export const lightTheme: AppTheme = {
  colors: {
    background: 'white',
    text: 'black',
  },
};

export const darkTheme: AppTheme = {
  colors: {
    background: 'black',
    text: 'white',
  },
};
