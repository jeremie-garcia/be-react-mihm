import {createSlice} from '@reduxjs/toolkit'

export const selectionSlice = createSlice({
    name: 'selection',
    initialState: {
        value: []
    },
    reducers: {
        toggle: (state, action) => {
            if(state.value.includes(action.payload)){
               state.value = state.value.filter((i) => i !== action.payload);
           }else{
               state.value = [...state.value, action.payload];
           }

        }
    }
});

export const selectSelection = state => state.selection.value;
export const {toggle} = selectionSlice.actions
export default selectionSlice.reducer