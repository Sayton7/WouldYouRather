import { createSlice } from '@reduxjs/toolkit';
import { questionResponse } from './sharedActions'
import { asyncSaveQuestion } from './sharedActions'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        receiveUsers: (state, action) => {
            Object.assign(state, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(questionResponse, (state, action) => {
                state[action.payload.authedUser].answers = Object.assign(state[action.payload.authedUser].answers, {[action.payload.qid]: action.payload.answer})
            })
            .addCase(asyncSaveQuestion.fulfilled, (state, action) => {
                state[action.payload.author].questions.push(action.payload.id)
            })
    }
})

export const { receiveUsers } = usersSlice.actions

export const selectUsers = (state) => state.users

export default usersSlice.reducer