import React, {useState} from 'react';
import DropDown from './DropDown';
import Button from './Button';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import Logo from './logo.png'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseLeave = () => {
    setDropDown(false);
  };

  return (
    <>
      <section>
         <nav className='navbar'>
             <Link to='/' className='logo'><i className='fas fa-home' /><img src={Logo} alt="Sapientia"/></Link>
             <div className='menu-icon' onClick={changeClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
             </div>
             <ul className='nav-list'>
               <li className='nav-items'>
                 <Link to="/" className='nav-links' onClick={closeMobileMenu}> Home </Link>
               </li>
               <li className='nav-items'>
                 <Link to="/about" className='nav-links' onClick={closeMobileMenu}> About </Link>
               </li>
               <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                 <Link  className='nav-links' onClick={closeMobileMenu}> Category <i className='fas fa-caret-down'/>
                    {dropDown && <DropDown />}
                  </Link>
               </li>
               <li className='nav-items'>
                 <Link to="/contact" className='nav-links' onClick={closeMobileMenu}> contact </Link>
               </li>
               <li className='nav-items'>
                 <Link to="/sign-up" className='nav-links-button' onClick={closeMobileMenu}> Sign Up </Link>
               </li>
             </ul>

             <Button />
         </nav>
      </section>
    </>
  )
}

export default Navbar