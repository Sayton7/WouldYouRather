import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../slices/users'
import questionsReducer from '../slices/questions'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        questions: questionsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})