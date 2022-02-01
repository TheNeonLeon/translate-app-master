import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './HeaderStyle.css'
import userIcon from '../../images/user-icon.svg'

const Header = () => {
  //state for header
  const [user, setUser] = useUser();
  return (
  <div>
    
      <header className='header'>
          <h1 className='header-text'>Lost In Translation</h1>
          {user !== null &&
            <Link to="/profile">{user.username}
            <img className='user-image' src={userIcon}></img>
            </Link>
            
          }
          
      </header>
  </div>
  );
};

export default Header;
