import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        receiveUsers: (state, action) => {
            state.users = action.users
        }
    },
})

export const { receiveUsers } = usersSlice.actions

export default usersSlice.reducer