import classes from './Counter.module.css';
import { counterActions } from '../Store';
import { useSelector,useDispatch} from 'react-redux';
const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCart)
  const dispatch = useDispatch()

  const IncrementHandler = () =>{
    dispatch(counterActions.Increment())
  }
  const DecrementHandler = () =>{
    dispatch(counterActions.Decrement())
  }
  const Incrementby5Handler = () =>{
    dispatch(counterActions.Incrementby5(5))
  }
  const Decrementby5Handler = () =>{
    dispatch(counterActions.Decrementby5(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&& <div className={classes.value}>{counter}</div>}
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
