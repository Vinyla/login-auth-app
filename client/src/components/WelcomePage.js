import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/authActions';

const WelcomePage = () => {
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
      <div className='form'>
      <h2>Welcome {user.name}!</h2>
      <button className='logout' onClick={onUserLogout}>Logout</button>
      </div>
    </div>
  );
};
export default WelcomePage;
