import React from "react";
import { useSelector } from "react-redux";
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { selectAuthedUser } from "../slices/authedUser";
import { selectUsers } from "../slices/users";
import { selectQuestions } from "../slices/questions";
import { useParams, useLocation } from 'react-router-dom';
import { Redirect } from "react-router";


const QuestionPage = () => {
    const {id} = useParams()
    const location = useLocation()
    const authedUser = useSelector(selectAuthedUser)
    const users = useSelector(selectUsers)
    const questions = useSelector(selectQuestions)
    const answersList = Object.keys(users[authedUser].answers)
    const questionsList = Object.keys(questions)

    return (
        answersList.includes(id)
        ? <AnsweredQuestion />
        : (questionsList.includes(id)
            ? <UnansweredQuestion />
            : <Redirect to='/notfound' />)
    )
}

export default QuestionPage