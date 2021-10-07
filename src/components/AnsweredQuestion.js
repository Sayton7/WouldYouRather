import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" sx={{height: 15}} {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
          <CheckCircleOutlineIcon />
        </Box>
      </Box>
    );
  }

export default function ActionAreaCard() {
  return (
    <Card className='answered-question'>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            User
          </Typography>
          <Box className = 'user-question'>
            <Avatar alt="User" src="" className='avatar'/>
            <Box className='options'>
                <Typography className='results'>Results:</Typography>
                <Box className='container'>
                    <Typography>Option One</Typography>
                    <LinearProgressWithLabel value={10} />
                    <Typography>Vote percentage</Typography>
                </Box>
                <Box className='container'>
                    <Typography>Option Two</Typography>
                    <LinearProgressWithLabel value={20} />
                    <Typography>Vote percentage</Typography>
                </Box>
            </Box>
          </Box>
        </CardContent>
    </Card>
  );
}
