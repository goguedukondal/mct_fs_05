import {createSlice} from '@reduxjs/toolkit'

const state = createSlice({
    name:"state",
    initialState:{
        value:1
    },
    reducers:{
    setValue:(initialstate,action) => {
        initialstate.value=action.payload
    }
}
})

export const{setValue} = state.actions
export default state.reducer;