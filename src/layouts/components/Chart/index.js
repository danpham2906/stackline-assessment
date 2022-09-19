import React, { useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../features/data/dataSlice';

export const Chart = (props) => {
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
  <Card
    {...props}
  >
    <CardContent>
      <Grid
        container
      >
        <Grid item sx={{ width: '100%' }}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            RETAIL SALES
          </Typography>
        </Grid>
        <Grid item sx={{ width: '100%', paddingTop: '20px' }}>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.sales} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
              <XAxis dataKey="weekEnding" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="retailSales" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};