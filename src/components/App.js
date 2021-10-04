import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleInitialData from '../slices/shared'
import Nav from './Nav'
import LoginCard from'./LoginCard'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <div>
      <Nav />
      <LoginCard />
    </div>
  );
}

export default App;
