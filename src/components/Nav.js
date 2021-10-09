import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectAuthedUser } from '../slices/authedUser';
import { selectUsers } from '../slices/users'
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {
  const authedUser = useSelector(selectAuthedUser)
  const users = useSelector(selectUsers)

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box className='navBtns'>
            <Button color="inherit" disabled={authedUser === null} component={Link} to='/'>Home</Button>
            <Button color="inherit" disabled={authedUser === null} component={Link} to='/new'>New Question</Button>
            <Button color="inherit" disabled={authedUser === null} component={Link} to='/leaderboard'>Leader Board</Button>
          </Box>
          <Box className="userInfo">
            <Typography variant="h6" component="div" >
              {authedUser === null ? "Please Log In" : `Welcome, ${authedUser}`}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
             >
             {authedUser === null
              ? <Avatar alt="User" src="" />
              : <Avatar alt={users[authedUser].name} src={users[authedUser].avatarURL} />
             }
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}