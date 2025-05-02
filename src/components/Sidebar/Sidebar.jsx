function Sidebar() {
    return (
      <div className="sidebar">
        <a href="https://github.com/Yeonjae-koo" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/home.png'} alt="GitHub" width="40"/>
        </a>
        
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/wap.png'} alt="Google" width="40"/>
        </a>

        <a href="https://www.notion.so/DashBoard-57f2d43a54e249b5994e47c9b4170646?pvs=4" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/folder.png'} alt="Notion" width="40"/>
        </a>

        <a href="https://Youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/music.png'} alt="Youtube" width="40"/>
        </a>

      </div>
    );
  }
  
  export default Sidebar;