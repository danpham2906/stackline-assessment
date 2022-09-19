import React, { useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../features/data/dataSlice';

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
          <Grid item sx={{ width: '100%', paddingLeft: '10px' }}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="subtitle1"
            >
              Retail Sales
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%', paddingTop: '20px' }}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data.sales} margin={{ top: 20, right: 30, left: -45, bottom: 0 }}>
                <XAxis dataKey="weekEnding" tickLine={false} interval={4}
                  tickFormatter={(value) => {
                    if (value === undefined || value === "" || value === null) {
                      return "";
                    }
                    return `${month[parseInt(value.substring(5, 7)) - 1]}`;
                  }}
                />
                <YAxis domain={[0, 'dataMax + 100000']} tick={false} />
                <Tooltip />
                <Line type="monotone" dataKey="retailSales" stroke="DarkGray" strokeWidth={3} />
                <Line type="monotone" dataKey="wholesaleSales" stroke="DeepSkyBlue" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};