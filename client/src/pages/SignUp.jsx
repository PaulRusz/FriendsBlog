import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import './SignUp.css'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'

const SignUp = () => {
  const [FormState, SetFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    avatar: '',
  });

  const [AddUser, { data }] = useMutation(ADD_USER);

  const HandleChange = (Event) => {
    const { name, value } = Event.target;

    SetFormState({
      ...FormState,
      [name]: value,
    });
  };

  const HandleFormSubmit = async (Event) => {
    Event.preventDefault();
    console.log(FormState);

    try {
      const { data } = await AddUser({
        variables: { ...FormState },
      });

      Auth.Login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='SignUp-Container'>
      <div className='Title-Container'>
        <h1>Sign Up</h1>
      </div>
      <br />
      <div className='Input-Container'>
        {data ? (
          <div className='Success-Container'>
            <p>
              Success! You may now head{' '}
              <Link to='/'>back to the homepage.</Link>
            </p>
          </div>
        ) : (
          <form onSubmit={HandleFormSubmit}>
            <input
              className='Input-Item'
              placeholder='First Name'
              name='firstName'
              type='text'
              value={FormState.firstName}
              onChange={HandleChange}
            />
            <input
              className='Input-Item'
              placeholder='Last Name'
              name='lastName'
              type='text'
              value={FormState.lastName}
              onChange={HandleChange}
            />
            <input
              className='Input-Item'
              placeholder='Username'
              name='username'
              type='text'
              value={FormState.username}
              onChange={HandleChange}
            />
            <input
              className='Input-Item'
              placeholder='Email'
              name='email'
              type='email'
              value={FormState.email}
              onChange={HandleChange}
            />
            <input
              className='Input-Item'
              placeholder='Password'
              name='password'
              type='password'
              value={FormState.password}
              onChange={HandleChange}
            />
            <button
              className='Input-Button'
              style={{ cursor: 'pointer' }}
              type='submit'
            >
              Create Account
            </button>
          </form>
        )}

        {Error && <div className='Input-Error'>{Error.message}</div>}
      </div>
    </main>
  );
}

export default SignUp;