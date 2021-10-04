import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleInitialData from '../slices/shared'
import ButtonAppBar from './Nav'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <div>
      <ButtonAppBar />
    </div>
  );
}

export default App;
