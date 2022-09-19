import { ThemeProvider } from '@mui/material/styles';
import { MainLayout } from './layouts/MainLayout';
import { TopBar } from './layouts/MainLayout/TopBar';

import { theme } from './theme';

function App() {
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
