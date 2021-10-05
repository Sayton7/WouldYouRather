import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {

  return (
    <Box sx={{minWidth: 200}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.user}
          label="Age"
          onChange={props.handleChange}
        >
          {(Object.keys(props.users)).map((user, index) => (
            <MenuItem value={user} key={index}>{props.users[user].name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}