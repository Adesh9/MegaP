import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth, useFirebase } from '../../Context/firebase';
import { signOut } from 'firebase/auth';
import Nav from 'react-bootstrap/Nav';
import Try from '../Try';
import Combined from '../Combined/Combined';


function Mainnav(){

      // const {i18n} = useTranslation();

  // const changeLanguage = (lng) =>{
  //   i18n.changeLanguage(lng);
  // };
  const firebase = useFirebase();
  const navigate = useNavigate();

  

  const handleLogOut = () =>{
    signOut(firebaseAuth).then(() => {
     navigate("/");
     console.log("Signed Out")
    });
 };

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

  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'readings':
        return <Try />;
      case 'visualize':
        return <Combined />;
      default:
        return <Try/>;
    }
  };

  // const langauges =[
  //   {code:"en",lng:"English"},
  //   {code:"hi",lng:"Hindi"},
  //   {code:"mr",lng:"Marathi"}
  // ]

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-container'>
          <NavLink to='/Main' className='navbar-logo' onClick={closeMobileMenu}>
            {/* D-Farm */}
            {t("logoname")}
            <i class='fab fa-typo3' />
          </NavLink>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className={`nav-links ${activeTab === 'readings' ? 'active' : ''}`}
              onClick={() => handleTabClick('readings')}>
                {/* Home */}
                {t("head5")}
            </li>
            <li className={`nav-links ${activeTab === 'visualize' ? 'active' : ''}`}
              onClick={() => handleTabClick('visualize')}>
              
                {/* Readings */}
                {t("head6")}
             
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
                onClick={handleLogOut}
              >
                {t("head4")}
              </NavLink>
            </li>
          </ul>
           <Button className="sure" onClick={handleLogOut} ><NavLink className="sure"to='/Login'>{t("head4")}</NavLink></Button>
         
        </div>
       
      </nav>
      <div>
        {renderTabContent()}
      </div>
    </>
  );

}

export default Mainnav;