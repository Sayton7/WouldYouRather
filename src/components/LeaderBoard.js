import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { selectUsers } from '../slices/users'

export default function MediaCard() {
  const users = useSelector(selectUsers)
  const usersList = Object.keys(users).sort((a,b) => 
    (Object.keys(users[b].answers).length + users[b].questions.length)
    - (Object.keys(users[a].answers).length + users[a].questions.length)
  )

  return (
    usersList.map((user, index) => {
      const answeredQ = Object.keys(users[user].answers).length
      const createdQ = users[user].questions.length
      const score = answeredQ + createdQ
      return (
        <Card className='leader-board' key={user}>
          <CardContent className='container'>
            <Avatar alt={users[user].name} src={users[user].avatarURL} className='avatar'/>
            <Box className='user-info'>
              <Typography className='name'>#{index+1} {users[user].name}</Typography>
              <Typography className='answered'>Answered Questions: {answeredQ}</Typography>
              <Typography className='created'>Created Questions: {createdQ}</Typography>
            </Box>
            <Box className='score'>
              <Typography className='score-title'>Score</Typography>
              <Avatar className='score-value'>{score}</Avatar>
            </Box>
          </CardContent>
        </Card> 
      )
    })
  );
}
