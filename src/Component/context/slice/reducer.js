import {createSlice} from '@reduxjs/toolkit'

export const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        user:[],
    },
    reducers: {
      setArray: (state, action) => {
        state.user = action.payload; 
      }
    },
});

export const {setArray,adddata} = userDetail.actions;
export default userDetail.reducer
