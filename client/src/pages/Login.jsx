import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import './Login.css'
import { LOGIN_USER } from '../utils/mutations'
import auth from '../utils/auth'

const Login = () => {
  const [Email, SetEmail] = useState('');
  const [EmailError, SetEmailError] = useState('');
  const [PasswordError, SetPasswordError] = useState('');
  const [Password, SetPassword] = useState('');
  const [Login] = useMutation(LOGIN_USER);

  const Navigate = useNavigate();

  const OnButtonClick = async () => {
    // Set Initial Error Values To Empty
    SetEmailError('');
    SetPasswordError('');

    // Check If User Has Entered Both Fields
    if ('' === Email) {
      SetEmailError('Please Enter a Valid Email');
      return;
    }
    if ('' === Password) {
      SetPasswordError('Please Enter a Password');
      return;
    }

    // Check If Email Has Valid Format
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
      SetEmailError('Please Enter a Valid Email');
      return;
    }

    // Ensure Password Is 8 Or More Characters
    if (Password.length < 7) {
      SetPasswordError('Password Must Be At Least 8 Characters');
      return;
    }

    try {
      // Login User
      const { data } = await Login({
        variables: {
          email: Email,
          password: Password,
        },
      });
      console.log(data);
      // Navigate To Home Page
      auth.Login(data.login.token);
      Navigate('/Profile');
    } catch (error) {
      console.error('failed to login', error);
    }
  };

  return (
    <div className='Main-Container'>
      <div className='Title-Container'>
        <h1>Login</h1>
      </div>
      <br />
      <div className='Input-Container'>
        <input
          value={Email}
          placeholder='Email'
          onChange={(Event) => SetEmail(Event.target.value)}
          className='Input-Item'
        />
        <label className='Error-Label'>{EmailError}</label>
      </div>
      <br />
      <div className='Input-Container'>
        <input
          value={Password}
          placeholder='Password'
          onChange={(Event) => SetPassword(Event.target.value)}
          type='password'
          className='Input-Item'
        />
        <label className='Error-Label'>{PasswordError}</label>
      </div>
      <br />
      <div className='Input-Container'>
        <input
          className='Input-Button'
          type='button'
          onClick={OnButtonClick}
          value='Log In'
        />
      </div>
      <br />
      <div className='Input-Container'>
        <input
          className='Input-Button'
          type='button'
          onClick={() => Navigate('/signup')}
          value='Create New Account'
        />
      </div>
    </div>
  );
}

export default Login;