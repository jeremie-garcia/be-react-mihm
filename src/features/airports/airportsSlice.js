import { createSlice } from '@reduxjs/toolkit'
const data = require('../../db/FPL-20180119-extract');
export const airportsSlice = createSlice({
    name: 'airports',
    initialState: {
        value: data.airports
    },
    reducers: {
    }
})


export const selectAirports = state => state.airports.value;
export default airportsSlice.reducer