import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthedUser } from '../slices/authedUser'
import { selectUsers } from '../slices/users'
import { selectQuestions } from '../slices/questions'

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
          {props.selected === props.option &&
          <CheckCircleOutlineIcon />}
        </Box>
      </Box>
    );
  }

export default function ActionAreaCard() {
    const {id} = useParams()
    const authedUser = useSelector(selectAuthedUser)
    const users = useSelector(selectUsers)
    const questions = useSelector(selectQuestions)
    const optionOneVotes = questions[id].optionOne.votes.length
    const optionTwoVotes = questions[id].optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const selectedOption = users[authedUser].answers[id]

  return (
    <Card className='answered-question'>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            Asked by {users[questions[id].author].name}
          </Typography>
          <Box className = 'user-question'>
            <Avatar alt={users[questions[id].author].name} src={users[questions[id].author].avatarURL} className='avatar'/>
            <Box className='options'>
                <Typography className='results'>Results:</Typography>
                <Box className='container'>
                    <Typography sx={{fontWeight:600, marginBottom: 1}}>{questions[id].optionOne.text}</Typography>
                    <LinearProgressWithLabel value={(optionOneVotes/totalVotes*100)} option='optionOne' selected={selectedOption} />
                    <Typography sx={{marginTop:1}}>{optionOneVotes} out of {totalVotes} votes</Typography>
                </Box>
                <Box className='container'>
                    <Typography sx={{fontWeight:600, marginBottom: 1}}>{questions[id].optionTwo.text}</Typography>
                    <LinearProgressWithLabel value={(optionTwoVotes/totalVotes*100)} option='optionTwo' selected={selectedOption}/>
                    <Typography sx={{marginTop:1}}>{optionTwoVotes} out of {totalVotes} votes</Typography>
                    
                </Box>
            </Box>
          </Box>
        </CardContent>
    </Card>
  );
}
