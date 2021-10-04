import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        receiveUsers: (state, action) => {
            Object.assign(state, action.payload)
        }
    },
})

export const { receiveUsers } = usersSlice.actions

export const selectUsers = (state) => state.users

export default usersSlice.reducer