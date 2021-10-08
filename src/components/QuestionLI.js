import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard(props) {
  return (
    <Card className='question-li'>
      <CardActionArea component={Link} to={props.isAnswered ? `/answered/${props.qid}` : `/unanswered/${props.qid}`}>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            {`${props.userName} asks:`}
          </Typography>
          <Box className = 'user-question'>
          <Avatar alt={props.userName} src={props.userAvatar} className='avatar'/>
          <Typography variant="body2" color="text.secondary" className='content'>
            {`${props.contentSample.substr(0, 20)}...`}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
