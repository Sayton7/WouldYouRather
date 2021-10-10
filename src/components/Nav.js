import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useSelector } from 'react-redux';
import { selectAuthedUser, removeAuthedUser } from '../slices/authedUser';
import { useDispatch } from 'react-redux';
import { selectUsers } from '../slices/users'
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const authedUser = useSelector(selectAuthedUser)
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()

  const handleToggle = () => {
    if (authedUser !== null) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = () => {
    dispatch(removeAuthedUser(null))
    setOpen(false);
  }

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
            <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}  
             >
             {authedUser === null
              ? <Avatar alt="User" src="" />
              : <Avatar alt={users[authedUser].name} src={users[authedUser].avatarURL} />
             }
            </IconButton>
            {authedUser !== null &&
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            }
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}