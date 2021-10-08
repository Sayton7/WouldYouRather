import { createSlice } from '@reduxjs/toolkit'
import { addQuestion } from './sharedActions'

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {},
    reducers: {
        receiveQuestions: (state, action) => {
            Object.assign(state, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuestion, (state, action) => {
                state[action.payload.qid][action.payload.answer].votes.push(action.payload.authedUser)
            })
    }
})

export const { receiveQuestions } = questionsSlice.actions

export const selectQuestions = (state) => state.questions

export default questionsSlice.reducer