import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const questionsSlice = createSlice({
    name: questions,
    initialState,
    reducers: {
        receiveQuestions: (state, action) => {
            state.questions = action.questions
        }
    },
})

export const { receiveQuestions } = questionsSlice.actions

export default questionsSlice.reducer