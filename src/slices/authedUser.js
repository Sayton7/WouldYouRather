import { createSlice } from '@reduxjs/toolkit'

export const authedUserSlice = createSlice({
    name: 'authedUser',
    initialState: null,
    reducers: {
        setAuthedUser: (state, action) => {
            Object.assign(state, action.payload)
        }
    },
})

export const { setAuthedUser } = authedUserSlice.actions

export default authedUserSlice.reducer