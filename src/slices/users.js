import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const usersSlice = createSlice({
    name:users,
    initialState,
    reducers: {
        recieveUsers: (state, action) => {
            state.users = action.users
        }
    },
})

export const { recieveUsers } = usersSlice.actions

export default usersSlice.reducer