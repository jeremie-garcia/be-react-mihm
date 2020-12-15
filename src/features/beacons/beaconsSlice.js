import { createSlice } from '@reduxjs/toolkit'
const data = require('../../db/FPL-20180119-extract');
export const beaconsSlice = createSlice({
    name: 'beacons',
    initialState: {
        value: data.beacons
    },
    reducers: {
    }
})

export const selectBeacons = state => state.beacons.value;
export default beaconsSlice.reducer