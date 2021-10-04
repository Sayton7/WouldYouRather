import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BasicSelect from './SelectUser'

export default function ImgMediaCard() {
  return (
    <Card className='login'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
          Sign In
        </Typography>
      </CardContent>
      <CardActions >
        <BasicSelect />
      </CardActions>
    </Card>
  );
}
