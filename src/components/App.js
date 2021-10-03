import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleInitialData from '../slices/shared'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <div>
      APP
    </div>
  );
}

export default App;
