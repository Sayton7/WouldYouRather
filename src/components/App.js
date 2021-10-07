import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handleInitialData from '../slices/shared'
import Nav from './Nav'
import LoginCard from './LoginCard'
// import QuestionsList from './QuestionsList'
import UnansweredQuestion from './UnansweredQuestion'
import { selectAuthedUser } from '../slices/authedUser';

function App() {
  const authedUser = useSelector(selectAuthedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <Nav />
      {authedUser === null
      ? <LoginCard />
      : <UnansweredQuestion />
      }
    </div>
  );
}

export default App;
