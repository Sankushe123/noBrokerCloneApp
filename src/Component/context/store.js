import {configureStore} from '@reduxjs/toolkit'
import userDetailReducer from './slice/reducer';
export const store = configureStore({
    reducer:{
        userDetail : userDetailReducer,
    },
});