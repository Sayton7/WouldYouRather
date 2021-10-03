import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from '../slices/users'
import { questionsReducer } from '../slices/questions'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        questions: questionsReducer,
    }
})