import {createSlice} from '@reduxjs/toolkit'

export const updatingSlice = createSlice({
    name: 'updating',
    initialState: {
        value: []
    },
    reducers: {
        updateUpdating: (state, action) => {
            const newUpdated = [...state.value ];
            if(newUpdated.includes(action.payload.fpl_id) && !action.payload.is_updated){
                newUpdated.splice(newUpdated.indexOf(action.payload.fpl_id),1);
            }else if (!newUpdated.includes(action.payload.fpl_id) && action.payload.is_updated){
                newUpdated.push(action.payload.fpl_id);
            }
           state.value = newUpdated;
        }
    }
})

export const selectUpdating = state => state.updating.value;
export const {updateUpdating} = updatingSlice.actions
export default updatingSlice.reducer