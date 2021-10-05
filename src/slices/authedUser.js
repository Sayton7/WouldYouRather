import { createSlice } from '@reduxjs/toolkit'

export const authedUserSlice = createSlice({
    name: 'authedUser',
    initialState: null,
    reducers: {
        setAuthedUser: (state, action) => {
            state.setAuthedUser = action.payload
        }
    },
})

export const { setAuthedUser } = authedUserSlice.actions

export default authedUserSlice.reducer