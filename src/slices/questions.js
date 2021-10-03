import { createSlice } from '@reduxjs/toolkit'

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {},
    reducers: {
        receiveQuestions: (state, action) => {
            state.users = action.users
        }
    },
})

export const { receiveQuestions } = questionsSlice.actions

export default questionsSlice.reducer