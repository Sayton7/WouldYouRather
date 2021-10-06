import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleInitialData from '../slices/shared'
import Nav from './Nav'
// import LoginCard from './LoginCard'
import Questions from './Questions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <Nav />
      {/* <LoginCard /> */}
      <Questions />
    </div>
  );
}

export default App;
