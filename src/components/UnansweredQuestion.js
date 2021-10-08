import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthedUser } from '../slices/authedUser'
import { selectUsers } from '../slices/users'
import { selectQuestions } from '../slices/questions'
import { handleSaveQuestionAnswer } from '../slices/shared'
import { Redirect } from 'react-router-dom'

function ControlledRadioButtonsGroup(props) {
    const [value, setValue] = React.useState('');
    const [toHome, setToHome] = React.useState('false');
    const dispatch = useDispatch()

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleSubmit = () => {
      dispatch(handleSaveQuestionAnswer(props.authedUser, props.qid, value))
      setToHome(true)
    }

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <FormControl component="fieldset" className='options'>
        <FormLabel component="legend" className='text'>Would You Rather ...</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="optionOne" control={<Radio />} label={props.optionOne} />
          <FormControlLabel value="optionTwo" control={<Radio />} label={props.optionTwo} />
        </RadioGroup>
        <Button variant="contained" className='submit' onClick={() => {handleSubmit()}}>Submit</Button>
      </FormControl>
    );
}

export default function ActionAreaCard() {
    const {id} = useParams()
    const authedUser = useSelector(selectAuthedUser)
    const users = useSelector(selectUsers)
    const questions = useSelector(selectQuestions)
  return (
    <Card className='unanswered-question'>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            {users[questions[id].author].name} asks:
          </Typography>
          <Box className = 'user-question'>
            <Avatar alt={users[questions[id].author].name} src={users[questions[id].author].avatarURL} className='avatar'/>
            <ControlledRadioButtonsGroup
            optionOne={questions[id].optionOne.text}
            optionTwo={questions[id].optionTwo.text}
            authedUser={authedUser}
            qid={id}
            />
          </Box>
        </CardContent>
    </Card>
  );
}
