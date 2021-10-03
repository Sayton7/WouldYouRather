import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const usersSlice = createSlice({
    name: users,
    initialState,
    reducers: {
        receiveUsers: (state, action) => {
            state.users = action.users
        }
    },
})

export const { recieveUsers } = usersSlice.actions

export default usersSlice.reducer