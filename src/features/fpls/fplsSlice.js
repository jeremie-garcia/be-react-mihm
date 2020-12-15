import {createSlice} from '@reduxjs/toolkit'

const data = require('../../db/FPL-20180119-extract');
export const fplsSlice = createSlice({
    name: 'fpls',
    initialState: {
        value: data.fpls
    },
    reducers: {
        updateFpls: (state, action) => {
            state.value = state.value.map(fpl =>
                fpl.id === action.payload.id
                    ? action.payload
                    : fpl)
        }
    }
})

export const selectFpls = state => state.fpls.value;
export const {updateFpls} = fplsSlice.actions
export default fplsSlice.reducer