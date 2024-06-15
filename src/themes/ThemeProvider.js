import React, { useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
  },
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleTheme} variant="contained" color="primary">
        Toggle Theme
      </Button>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
