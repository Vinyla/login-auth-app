import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/authActions';

const HomePage = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUserLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div>
      {auth.isAuthenticated && (
        <div className='welcome'>
          <h2>Hello {user.name}. You are currently logged.</h2>
          <button onClick={onUserLogout} className='logout'>
            Logout
          </button>
        </div>
      )}
      {!auth.isAuthenticated && (
        <div className='container'>
          <div className='button-container'>
            <h2>Have an account?</h2>
            <Link to='login'>
              <button className='button-sign-in'>LOG IN</button>
            </Link>
          </div>
          <div className='button-container'>
            <h2>Don't have an account?</h2>
            <Link to='register'>
              <button className='button-sign-up'>REGISTER</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
