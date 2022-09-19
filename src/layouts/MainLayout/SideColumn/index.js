import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, Divider } from '@mui/material';
import Chip from '@mui/material/Chip';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../features/data/dataSlice';

export const SideColumn = (props) => {
  const theme = useTheme();
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Card
      sx={{ height: '100%', width: '350px' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid sx={{ width: '100%', padding: '10px', }} align="center">
            <img src={data.image} width="200px" />
          </Grid>
          <Grid item sx={{ width: '100%', }}
            align="center"
          >
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
              sx={{ width: '100%', fontWeight: 'bold' }}
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%', padding: '0px 50px 0px 50px' }}
            align="center"
          >
            <Typography
              color="textSecondary"
              variant="caption"
              sx={{ width: '100%', color: 'LightSlateGrey' }}
            >
              {data.subtitle}
            </Typography>
          </Grid>
          <Divider sx={{ width: '100%', margin: '10px 0px' }} />
          <Grid container sx={{ width: '100%', justifyContent: 'space-between', padding: '0px 15px' }}
            align="center"
            spacing={1}
          >
            {data.tags ? data.tags.map((tag) => (
              <Grid item key={tag}>
                <Chip label={tag} variant="outlined" />
              </Grid>
            )) : <></>}
          </Grid>
          <Divider sx={{ width: '100%', margin: '10px 0px' }} />
        </Grid>
      </CardContent>
    </Card >
  )
};