import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import logo from '../../../image/stackline_logo.svg';
import { ReactComponent as StacklineLogo } from '../../../image/stackline_logo.svg';

const AppBarLayoutRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  display: 'flex',
}));

export const TopBar = () => {
  const theme = useTheme();
  return (
    <AppBarLayoutRoot>
      <SvgIcon component={StacklineLogo} inheritViewBox sx={{ width: 'fit-content', padding: '15px 20px' }} />
    </AppBarLayoutRoot>
  );
};
