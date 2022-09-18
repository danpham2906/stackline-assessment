import { useTheme } from '@mui/material/styles';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SideColumn } from './SideColumn';
import { Chart } from '../components/Chart';
import { Table } from '../components/Table';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.grey,
  display: 'flex',
  // flex: '1 1 auto',
  maxWidth: '100%',
  height: '100vh',
  paddingTop: 70,
}));

export const MainLayout = () => {
  const theme = useTheme();
  return (
    <DashboardLayoutRoot>
      <Box
        sx={{
          display: 'flex',
          // flex: 'auto',
          // flexDirection: 'column',
          // width: '100%',
          padding: '30px 10px 30px 30px',
        }}
      >
        <SideColumn />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 'auto',
          // flexGrow: 1,
          flexDirection: 'column',
          // width: '100%',
          padding: '30px 30px 30px 10px',
          // height: '100vh',
        }}
      >
        <Box sx={{ paddingBottom: '50px' }}>
          <Chart />
        </Box>
        <Box sx={{ height: '100%' }} >
          <Table />
        </Box>
      </Box>
    </DashboardLayoutRoot>
  );
};
