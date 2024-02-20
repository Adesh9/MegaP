
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import './Navbar.css';
import { useTranslation } from 'react-i18next';







function Navbar() {

  // const {i18n} = useTranslation();

  // const changeLanguage = (lng) =>{
  //   i18n.changeLanguage(lng);
  // };




const {t} = useTranslation();


//mobile code.
const [isOpen, setIsOpen] = useState(false);
const toggleDropdown = () => {
  setIsOpen(!isOpen);
};





  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  // const langauges =[
  //   {code:"en",lng:"English"},
  //   {code:"hi",lng:"Hindi"},
  //   {code:"mr",lng:"Marathi"}
  // ]

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* D-Farm */}
            {t("logoname")}
            <i class='fab fa-typo3' />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                {/* Home */}
                {t("head1")}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Footer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {/* Reading's */}
                {t("head2")}
              </NavLink>
            </li>
            {/* <li className='nav-item'>
              <NavLink
                to='/Languages'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Languages
              </NavLink>
              
        
            </li> */}
            <LanguageSelector/>
         

            <li>
              <NavLink
                to='/Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign-up
                {t("head3")}
              </NavLink>
            </li>
          </ul>
           <Button className="sure" ><NavLink className="sure"to='/Login'>{t("head3")}</NavLink></Button>
         
        </div>
       
      </nav>
    </>
  );
}

export default Navbar;

