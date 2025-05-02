import React from 'react';
import { Routes, Route } from 'react-router-dom';    // BrowserRouter 는 index.js 에서 이미 감쌌습니다
import { useTranslation } from 'react-i18next';
import './i18n/i18n';

import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import MainWindow from './components/MainWindow/MainWindow';
import Sidebar from './components/Sidebar/Sidebar';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="app">
      <Header />

      <div className="background-title">
        <span className="title-jaes">Jae’s</span>
        <span className="title-archive">Archive</span>
      </div>

      {/* 배경 레이어들 */}
      <div className="layer-flares" />
      <div className="layer-bubbles" />
      <div className="layer-water" />
      <div className="sealife sealife-1" />
      <div className="sealife sealife-11" />
      <div className="sealife sealife-13" />
      <div className="sealife sealife-27" />

      {/* 경로별 렌더링 */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="content-wrapper">
              <div className="main">
                <Introduction />
                <MainWindow />
                <Sidebar />
              </div>
              <LanguageSwitch changeLanguage={changeLanguage} />
            </div>
          }
        />
        {/* 예: /gallery 나 /about 같은 추가 Route 가 필요하면 여기에 나열 */}
      </Routes>
    </div>
  );
}

export default App;
