import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from '../Store';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(AuthActions.login());
  };

  return (
    <main className={classes.auth}>
      {!isAuth ? (
        <section>
          <form onSubmit={loginHandler}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button type='submit'>Login</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Welcome Back!</h1>
        </section>
      )}
    </main>
  );
};

export default Auth;
