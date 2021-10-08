import { createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { saveQuestion } from '../utils/api'

export const questionResponse = createAction('questionResponse')

export const asyncSaveQuestion = createAsyncThunk('asyncSaveQuestion', async (info) => {
    const response = await saveQuestion(info)
    return response
    }
)