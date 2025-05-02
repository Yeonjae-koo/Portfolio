function LanguageSwitch({ changeLanguage }) {
  console.log("🔍 [LS] received changeLanguage:", changeLanguage);
    return (
      <div className="language-switch">
        <button onClick={() => changeLanguage('ko')}>🇰🇷 Korean</button>
        <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
      </div>
    );
  }
  
  export default LanguageSwitch;