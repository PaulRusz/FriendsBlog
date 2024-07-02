import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'

const SignUp = () => {
    const [FormState, SetFormState] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: '',
    });

    const [AddUser, { Error, Data }] = useMutation(ADD_USER);

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
            const { Data } = await AddUser({
                variables: { ...FormState },
            });

            Auth.Login(Data.AddUser.token);
        } catch (Error) {
            console.error(Error);
        }
    };

    return (
        <main className='SignUp-Container'>
            <div className='Title-Container'>
                <h1>Sign Up</h1>
            </div>
            <br />
            <div className='Input-Container'>
                {Data ? (
                    <p>
                        Success! You may now head{' '}
                        <Link to='/'>back to the homepage.</Link>
                    </p>
                ): (
                    <form onSubmit={HandleFormSubmit}>
                        <input
                            className='Input-Item'
                            placeholder='First Name'
                            name='FirstName'
                            type='text'
                            value={FormState.FirstName}
                            onChange={HandleChange}
                        />
                        <input
                            className='Input-Item'
                            placeholder='Last Name'
                            name='LastName'
                            type='text'
                            value={FormState.LastName}
                            onChange={HandleChange}
                        />
                        <input
                            className='Input-Item'
                            placeholder='Username'
                            name='Username'
                            type='text'
                            value={FormState.Username}
                            onChange={HandleChange}
                        />
                        <input
                            className='Input-Item'
                            placeholder='Email'
                            name='Email'
                            type='email'
                            value={FormState.Email}
                            onChange={HandleChange}
                        />
                        <input
                            className='Input-Item'
                            placeholder='Password'
                            name='Password'
                            type='password'
                            value={FormState.Password}
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

                {Error && (
                    <div className='Input-Error'>
                        {Error.message}
                    </div>
                )}
            </div>
        </main>
    );
}

export default SignUp;