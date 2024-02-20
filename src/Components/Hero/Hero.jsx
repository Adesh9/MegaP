import React from 'react';
//  import './App.css';
import { Button } from '../Button/Button';
import './Hero.css';
import Logo from './Final.mp4';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

function Hero() {
  const {t} = useTranslation();

  return (
    <div className='hero-container'>
      <video src={Logo} autoPlay loop muted />
      <h1>{t("hero1")}</h1>
      <p>{t("par1")}</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          {t("b1")}
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          {t("b2")} <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;