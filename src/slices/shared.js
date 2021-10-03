import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export default function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(dispatch(receiveUsers(users)))
            .then(dispatch(receiveQuestions(questions)))
    }
}