import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SelectUser from './SelectUser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from '../slices/authedUser'
import { selectUsers } from '../slices/users'

export default function ImgMediaCard() {
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  const [user, setUser] = React.useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleAuthedUser = (e) => {
    e.preventDefault()
    dispatch(setAuthedUser(users[user].id))
  }

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
          <SelectUser user={user} users={users}handleChange={handleChange}/>
          <Button onClick={(e) => handleAuthedUser(e)} variant="contained" disabled={user === ''}>Sign In</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
