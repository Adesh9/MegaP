import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Soilm from './Soilm.jpg';
import Rtdm from './Rtdm.jpg';
import Smokes from './Smokes.jpeg';
import Autoi from './Autoi.jpg';
import Minif from './Minif.jpg';
import { useTranslation } from 'react-i18next';


function Cards() {
  const {t} = useTranslation();

    return(
        <div className='cards'>
        <h1> {t("guide")}</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={Soilm}
                text={t("card1")}
                label={t("label1")}
                path='/services'
              />
              <CardItem
                src={Rtdm}
                text={t("card2")}
                label={t("labels")}
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={Smokes}
                text={t("card3")}
                label={t("label3")}
                path='/services'
              />
              <CardItem
                src={Autoi}
                text={t("card4")}
                label={t("label4")}
                path='/products'
              />
              <CardItem
                src={Minif}
                text={t("card5")}
                label={t("label5")}
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}
export default Cards;
