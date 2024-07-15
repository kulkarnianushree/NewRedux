import classes from './Counter.module.css';
import { useSelector,useDispatch} from 'react-redux';
const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const IncrementHandler = () =>{
    dispatch({type:'Increment'})
  }
  const DecrementHandler = () =>{
    dispatch({type:'Decrement'})
  }
  const Incrementby5Handler = () =>{
    dispatch({type:'IncrementBy5',value:5})
  }
  const Decrementby5Handler = () =>{
    dispatch({type:'DecrementBy5',value:5})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={Incrementby5Handler}>Increment By 5</button>
        <button onClick={Decrementby5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
