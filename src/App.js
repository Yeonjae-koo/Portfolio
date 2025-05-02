import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  function changeLanguage(lng) { i18n.changeLanguage(lng); }

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="background-title">
        <span className="title-jaes">Jae’s</span>
        <span className="title-archive">Archive</span>
      </div>

        {/* 배경 레이어 */}
        <div className="layer-flares" />
        <div className="layer-bubbles" />
        <div className="layer-water" />
        <div className="sealife sealife-1" />
        <div className="sealife sealife-11" />
        <div className="sealife sealife-13" />
        <div className="sealife sealife-27" />

        {/* 라우트 정의 */}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
