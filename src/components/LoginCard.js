import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SelectUser from './SelectUser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ImgMediaCard() {
  return (
    <Card className='loginCard'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
          Sign In
        </Typography>
      </CardContent>
      <CardActions>
        <Box className='cardActions'>
          <SelectUser />
          <Button variant="contained">Sign In</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
