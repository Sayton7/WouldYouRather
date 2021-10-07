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

function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
      <FormControl component="fieldset" className='options'>
        <FormLabel component="legend" className='text'>Would You Rather ...</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Option One" control={<Radio />} label="Option One" />
          <FormControlLabel value="Opiton Two" control={<Radio />} label="Option Two" />
        </RadioGroup>
        <Button variant="contained" className='submit'>Submit</Button>
      </FormControl>
    );
}

export default function ActionAreaCard() {
  return (
    <Card className='unanswered-question'>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            User
          </Typography>
          <Box className = 'user-question'>
            <Avatar alt="User" src="" className='avatar'/>
            <ControlledRadioButtonsGroup />
          </Box>
        </CardContent>
    </Card>
  );
}
