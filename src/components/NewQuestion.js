import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function ActionAreaCard() {
    const [one, setOne] = React.useState('');
    const [two, setTwo] = React.useState('');
  return (
    <Card className='unanswered-question'>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='user-asked'>
            User
          </Typography>
          <Box className = 'user-question'>
            <Avatar alt="User" className='avatar'/>
            <TextField
              id="outlined-multiline-flexible"
              label="Option One"
              multiline
              maxRows={4}
              value={one}
              onChange={(e) => setOne(e.target.value)}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Option Two"
              multiline
              maxRows={4}
              value={two}
              onChange={(e) => setTwo(e.target.value)}
            />
            <Button variant="contained">Submit</Button>
          </Box>
        </CardContent>
    </Card>
  );
}
