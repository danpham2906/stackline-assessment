import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 200 }, { name: 'Page C', uv: 100 }, { name: 'Page D', uv: 50 }, { name: 'Page E', uv: 500 }];

export const Chart = (props) => (
  <Card
    // sx={{ height: '200px' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
      // sx={{ justifyContent: 'space-between' }}
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
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);