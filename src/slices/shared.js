import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { questionResponse } from './sharedActions'

export default function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleSaveQuestionAnswer (authedUser, qid, answer) {
    const data = {
        authedUser,
        qid,
        answer,
    }
    return (dispatch) => {
        return saveQuestionAnswer(data)
            .then(dispatch(questionResponse(data)))
            .catch((e) => {
                console.warn('Error in handleSaveQuestion: ', e)
                alert('There was an error answering the question. Try again.')
            })
    }
}