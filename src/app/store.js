import { configureStore } from '@reduxjs/toolkit';
import fplsReducer from '../features/fpls/fplsSlice';
import beaconsReducer from '../features/beacons/beaconsSlice';
import airportsReducer from '../features/airports/airportsSlice';
import selectionReducer from '../features/selection/selectionSlice';
import updatingReducer from '../features/updating/updatingSlice';

export default configureStore({
    reducer: {
        fpls: fplsReducer,
        selection: selectionReducer,
        updating: updatingReducer,
        beacons: beaconsReducer,
        airports: airportsReducer,
    },
});
