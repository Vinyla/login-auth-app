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
    <div className='container'>
      {auth.isAuthenticated && (
        <div className='main-logged'>
          <h2>Hello {user.name}.</h2>
          <p>You are currently logged.</p>
          <button onClick={onUserLogout} className='logout'>
            Logout
          </button>
        </div>
      )}
      {!auth.isAuthenticated && (
        <div className='main'>
          <div className='button-container'>
            <h2>Login to your account</h2>
            <Link to='login'>
              <button className='button-sign-in'>LOGIN</button>
            </Link>
          </div>
          <div className='button-container'>
            <h2>Register for account</h2>
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
