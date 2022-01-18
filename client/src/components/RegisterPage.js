import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const auth = useSelector((state) => state.auth);
  const authError = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [inputError, setInputError] = useState({});

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2
    };
    dispatch(registerUser(newUser));
  };

  useEffect(() => {
    if (auth.registered) navigate('/login');
    if (authError !== inputError) setInputError(authError);
  }, [auth.registered, authError, inputError]);

  return (
    <div className='container'>
      <div className='form'>
        <h2>Sign up</h2>
        <form>
          <input
            onChange={onInputChange}
            name='name'
            value={user.name}
            type='text'
            placeholder='Enter a name'
            autoComplete='on'
          />
          <span>{inputError.name}</span>
          <input
            onChange={onInputChange}
            name='email'
            value={user.email}
            type='email'
            placeholder='Enter a email'
            autoComplete='on'
          />
          <span>{inputError.email}</span>

          <input
            onChange={onInputChange}
            name='password'
            value={user.password}
            type='password'
            placeholder='Enter a password'
            autoComplete='on'
          />
          <span>{inputError.password}</span>

          <input
            onChange={onInputChange}
            name='password2'
            value={user.password2}
            type='password'
            placeholder='Repeat the password'
            autoComplete='on'
          />
          <span>{inputError.password2}</span>
          <button className='button-sign-up' onClick={onFormSubmit}>
            SIGN UP
          </button>
        </form>
        <div>
          <p>
            Already have an account?&nbsp;
            <Link style={{ textDecoration: 'none' }} to='/login'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
