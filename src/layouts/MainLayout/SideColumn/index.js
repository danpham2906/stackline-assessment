import React, { useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../features/data/dataSlice';

export const SideColumn = (props) => {
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
              variant="overline"
              sx={{ width: '100%' }}
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%', paddingBottom: '20px' }}
            align="center"
          >
            <Typography
              color="textSecondary"
              variant="caption"
            >
              {data.subtitle}
            </Typography>
          </Grid>
          <Grid container sx={{ width: '100%', justifyContent: 'space-between' }}
            align="center"
            spacing={1}
          >
            {data.tags ? data.tags.map((tag) => (
              <Grid item key={tag}>
                <Chip label={tag} variant="outlined" />
              </Grid>
            )) : <></>}
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  )
};