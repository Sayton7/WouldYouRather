import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handleInitialData from '../slices/shared'
import Nav from './Nav'
import LoginCard from './LoginCard'
import QuestionsList from './QuestionsList'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage';
import NotFound from './NotFound';
import { selectAuthedUser } from '../slices/authedUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
        : <Switch>
            <Route path='/' exact component={QuestionsList} />
            <Route path='/questions/:id' component={QuestionPage} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route component={NotFound} />
          </Switch>
        }
      </div>
    </Router>
    
  );
}

export default App;
