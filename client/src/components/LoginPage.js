import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const auth = useSelector((state) => state.auth);
  const authError = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [inputError, setInputError] = useState({});
  const { email, password } = input;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: input.email,
      password: input.password
    };
    dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (auth.isAuthenticated) navigate('/welcome');
    if (authError !== inputError) setInputError(authError);
  }, [auth.isAuthenticated, authError, inputError]);

  return (
    <div className='form'>
      <h2>Login</h2>
      <div>
        <form action='submit'>
          <input
            onChange={onInputChange}
            name='email'
            value={email}
            type='email'
            placeholder='Email'
            autoComplete='on'
          />
          <span>{inputError.email}</span>
          <input
            onChange={onInputChange}
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            autoComplete='on'
          />
          <span>{inputError.password}</span>
          <button className='button-sign-in' onClick={onFormSubmit}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
