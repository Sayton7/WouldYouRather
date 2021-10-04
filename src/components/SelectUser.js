import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { selectUsers } from '../slices/users'

export default function BasicSelect() {
  const [user, setUser] = React.useState('');
  const users = useSelector(selectUsers)

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <Box sx={{minWidth: 200}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user}
          label="Age"
          onChange={handleChange}
        >
          {(Object.keys(users)).map((user, index) => (
            <MenuItem value={user} key={index}>{user}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}