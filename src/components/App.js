import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handleInitialData from '../slices/shared'
import Nav from './Nav'
import LoginCard from './LoginCard'
import QuestionsList from './QuestionsList'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { selectAuthedUser } from '../slices/authedUser';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const authedUser = useSelector(selectAuthedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
    // eslint-disable-next-line
  },[])

  return (
    <Router>
      <div>
        <Nav />
        {authedUser === null
        ? <Route path='/' component={LoginCard} />
        : <div>
            <Route path='/' exact component={QuestionsList} />
            <Route path='/answered/:id' component={AnsweredQuestion} />
            <Route path='/unanswered/:id' component={UnansweredQuestion} />
            <Route path='/new' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
          </div>
        }
      </div>
    </Router>
    
  );
}

export default App;
