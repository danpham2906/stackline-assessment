import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

export const SideColumn = (props) => (
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
          <img src="https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg" width="200px" />
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
            Shark Ninja
          </Typography>
        </Grid>
        <Grid item sx={{ width: '100%', paddingBottom: '20px' }}
          align="center"
        >
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Magic Bullet NutriBullet 12-Piece High Speed Blender/Mixer System
          </Typography>
        </Grid>
        <Grid container sx={{ width: '100%', justifyContent: 'space-between' }}
          align="center"
          spacing={1}
        >
          <Grid item>
            <Chip label="Chip 1" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Chip 2" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Chip 3" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Chip 4" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card >
);