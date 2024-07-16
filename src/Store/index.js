import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCart: false };

const CounterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    Increment(state) {
      state.counter++;
    },
    Decrement(state) {
      state.counter--;
    },
    Incrementby5(state, action) {
      state.counter += action.payload; 
    },
    Decrementby5(state, action) {
      state.counter -= action.payload; 
    },
    toggleCounter(state) {
      state.showCart = !state.showCart;
    }
  }
});

const initialAuthState = {isAuth:false}

const AuthSlice = createSlice({
    name:'Authentication',
    initialState: initialAuthState,
    reducers:{
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

const store = configureStore({
  reducer: {counter:CounterSlice.reducer,auth:AuthSlice.reducer}
});

export const counterActions = CounterSlice.actions;
export const AuthActions = AuthSlice.actions;

export default store;
