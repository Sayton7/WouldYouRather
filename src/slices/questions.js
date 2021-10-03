import { createSlice } from '@reduxjs/toolkit'

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {},
    reducers: {
        receiveQuestions: (state, action) => {
            Object.assign(state, action.payload)
        }
    },
})

export const { receiveQuestions } = questionsSlice.actions

export default questionsSlice.reducer