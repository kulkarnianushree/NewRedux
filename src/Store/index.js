import { createStore } from 'redux';

const CounterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'Increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'Decrement') {
        return {
            counter: state.counter - 1
        };
    }
    if (action.type === 'IncrementBy5') {
        return {
            counter: state.counter + action.value
        };
    }
    if (action.type === 'DecrementBy5') {
        return {
            counter: state.counter - action.value
        };
    }
    return state;
};

const store = createStore(CounterReducer);

export default store;
