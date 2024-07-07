import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Index.css'
import { UserMenuItems, MenuItems } from './MenuItems'
import Button from '../Button/Index'
import Auth from '../../utils/auth'

const Header = () => {
  // Mobile Menu Logic
  const [Active, SetActive] = useState(false);
  const HandleClick = () => SetActive(!Active);
  const CloseMobileMenu = () => SetActive(false);

  // Authentication Logic
  const [Authenticated, SetAuthenticated] = useState(false);
  useEffect(() => {
    const CheckAuthentication = () => {
      const IsLoggedIn = Auth.LoggedIn();
      SetAuthenticated(IsLoggedIn);
    };
    CheckAuthentication();
  }, []);

  return (
    <nav>
      {/* FriendsBlog Logo */}
      <div className='Menu-Container'>
        <div className='Header-Logo'>
          <Link to='/' className='Logo'>
            FriendsBlog
            <i className='fab fa-typo3' />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className='Menu-Icon' onClick={HandleClick}>
          <i className={Active ? 'fas fa-times': 'fas-fa-bars'} />
        </div>

        {/* Responsive Header Links Display */}
        <ul className={Active ? 'Header Active' : 'Header'}>
          {Authenticated ? (
            // Map User Menu Items
            UserMenuItems.map((Item, Index) => (
              <li className='Header-Item' key={Index}>
                <Link to={Item.Path} className={Item.ClassName} onClick={CloseMobileMenu}>
                  {Item.IconClass ? <i className={Item.IconClass} /> : null}
                  {Item.Title}
                </Link>
              </li>
            ))
          ) : (
            // Map Logged Out Menu Items
            MenuItems.map((Item, Index) => (
                <li className='Header-Item' key={Index}>
                  <Link to={Item.Path} className={Item.ClassName} onClick={CloseMobileMenu}>
                    <Button
                      ButtonStyle={Item.ButtonStyle}
                      ButtonSize={Item.ButtonSize}
                      Path={Item.Path}
                      ExtraClasses={Item.ClassName}
                    >
                      {Item.Title}
                    </Button>
                  </Link>
                </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;