import React from 'react';
import Gallery from './Gallery';
import windowframe from '../../images/windowframe.png';
import { useTranslation } from 'react-i18next';


function Introduction() {
  const { t } = useTranslation();   

  return (
    <div className="introduction">
      {/* 기존 Intro 윈도우 */}
      <div className="intro-window">
        <div className="intro-window-head">
         <p id = "Headline" >Yeonjae Koo</p>
        </div>
        <div className="intro-window-content">
         <div className="user-frame">
          <img src={windowframe} alt="windowframe" width={100} />
         </div>
         <div className="user-info">
         <p id ="user-info">
           {t('content.IntroInfo')}
          <strong>T</strong> 01040137116 <br /> 
          <strong>Email</strong> yjkoo0526@sookmyung.ac.kr
         </p>

        </div>
        </div>
      </div>

      {/* 여기에 gallery 렌더 */}
      <Gallery />
    </div>
  );
}

export default Introduction;