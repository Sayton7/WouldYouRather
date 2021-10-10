import React from "react";
import { useSelector } from "react-redux";
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { selectAuthedUser } from "../slices/authedUser";
import { selectUsers } from "../slices/users";
import { useParams } from 'react-router-dom';

const QuestionPage = () => {
    const {id} = useParams()
    const authedUser = useSelector(selectAuthedUser)
    const users = useSelector(selectUsers)
    const answersList = Object.keys(users[authedUser].answers)

    return (
        answersList.includes(id)
        ? <AnsweredQuestion />
        : <UnansweredQuestion />
    )
}

export default QuestionPage