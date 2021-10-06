import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function ActionAreaCard() {
  return (
    <Card className='question-li'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            User Asked
          </Typography>
          <Box className = 'user-question'>
          <Avatar alt="User" src="" className='avatar'/>
          <Typography variant="body2" color="text.secondary" className='content'>
            Question content
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
