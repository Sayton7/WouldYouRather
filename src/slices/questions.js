import { createSlice } from '@reduxjs/toolkit'
import { questionResponse } from './sharedActions'
import { asyncSaveQuestion } from './sharedActions'

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
            .addCase(questionResponse, (state, action) => {
                state[action.payload.qid][action.payload.answer].votes.push(action.payload.authedUser)
            })
            .addCase(asyncSaveQuestion.fulfilled, (state, action) => {
                state = Object.assign(state, {[action.payload.id]: action.payload})
            })
    }
})

export const { receiveQuestions } = questionsSlice.actions

export const selectQuestions = (state) => state.questions

export default questionsSlice.reducer