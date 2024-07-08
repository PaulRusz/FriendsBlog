import { useNavigate } from 'react-router-dom'
import './Logout.css'
import {
  AuthenticationActions,
  useAuthentication,
} from '../contexts/Authentication'

const Logout = () => {
  const Navigate = useNavigate();
  const [, dispatch] = useAuthentication();

  const HandleLogout = () => {
    // Logout action
    localStorage.removeItem('token');
    dispatch(AuthenticationActions.logout());
    // Then redirect to the main login page
    Navigate('/login');
  };

  return (
    <div className='Main-Container'>
      <div className='Title-Container'>
        <h1 className='Logout-Page-Heading'>Logout</h1>
      </div>
      <br />
      <div className='Input-Container'>
        <p>Are you sure you want to log out?</p>
      </div>
      <br />
      <div className='Input-Container'>
        <input
          className='Input-Button'
          type='button'
          onClick={HandleLogout}
          value='Logout'
        />
      </div>
    </div>
  );
};

export default Logout;
