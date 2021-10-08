import { createSlice } from '@reduxjs/toolkit';
import { addQuestion } from './sharedActions'

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
            .addCase(addQuestion, (state, action) => {
                state[action.payload.authedUser].answers = Object.assign(state[action.payload.authedUser].answers, {[action.payload.qid]: action.payload.answer})
            })
    }
})

export const { receiveUsers } = usersSlice.actions

export const selectUsers = (state) => state.users

export default usersSlice.reducer