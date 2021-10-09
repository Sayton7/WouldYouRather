import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function MediaCard() {
  return (
    <Card className='leader-board'>
      <CardContent className='container'>
        <Avatar className='avatar'/>
        <Box className='user-info'>
          <Typography>User Name</Typography>
          <Typography>Answered Questions</Typography>
          <Typography>Created Questions</Typography>
        </Box>
        <Box className='score'>
          <Typography>Score</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
