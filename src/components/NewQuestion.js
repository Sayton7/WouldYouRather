import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function ActionAreaCard() {
    const [one, setOne] = React.useState('');
    const [two, setTwo] = React.useState('');
  return (
    <Card className='new-question'>
        <CardContent>
          <Typography gutterBottom variant="h" component="div" className='create'>
            Create New Question
          </Typography>
          <Typography className='complete'>Complete the question:</Typography>
          <Typography className='would-you-rather'>Would you rather ...</Typography>
          <Box className = 'container'>
            <TextField
              id="outlined-multiline-flexible"
              label="Option One"
              multiline
              maxRows={2}
              value={one}
              onChange={(e) => setOne(e.target.value)}
              className='text-field'
            />
            <Typography className='complete'>OR</Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Option Two"
              multiline
              maxRows={2}
              value={two}
              onChange={(e) => setTwo(e.target.value)}
              className='text-field'
            />
            <Button variant="contained" className='button'>Submit</Button>
          </Box>
        </CardContent>
    </Card>
  );
}
