import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { MainLayout } from './layouts/MainLayout';
import { TopBar } from './layouts/MainLayout/TopBar';

import { theme } from './theme';
// import { fetchData } from './features/data/dataSlice';

function App() {
  // const data = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <TopBar />
        <MainLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
