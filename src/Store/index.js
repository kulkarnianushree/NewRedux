
import {createSlice , configureStore} from '@reduxjs/toolkit'
const initialState = {counter:0,showCart:false}

createSlice({
    name:'anything',
    initialState,
    reducers:{
        Increment(state) {
            state.counter++
        },
        Decrement(state) {
            state.counter--
        },
        Incrementby5(state,action) {
            counter = state.counter+action.value
        },
        Decrementby5(state,action) {
            counter = state.counter-action.value
        },
        toggleCounter(state) {
            showCart = !state.showCart
        }
    }
})


const store = configureStore({
    reducer:createSlice.reducer
});

export default store;
