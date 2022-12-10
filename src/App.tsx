import React from 'react';
import { Router } from './containers/router/Router';
import { Store } from "./store";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App(): JSX.Element {
  console.log("%c Line:16 🍧 CESIUM_BASE_URL", "color:#6ec1c2", CESIUM_BASE_URL);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <StoreProvider store={Store}>
        <Router />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
