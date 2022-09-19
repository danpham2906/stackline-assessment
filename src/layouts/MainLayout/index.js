import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SideColumn } from './SideColumn';
import { Chart } from '../components/Chart';
import { Table } from '../components/Table';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.grey,
  display: 'flex',
  maxWidth: '100%',
  height: '100vh',
  paddingTop: 70,
}));

export const MainLayout = () => {
  return (
    <DashboardLayoutRoot>
      <Box
        sx={{
          display: 'flex',
          padding: '30px 10px 30px 30px',
        }}
      >
        <SideColumn />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 'auto',
          flexDirection: 'column',
          padding: '30px 30px 30px 10px',
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
