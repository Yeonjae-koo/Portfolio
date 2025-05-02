import { useTranslation } from 'react-i18next';
import marvel1 from '../../images/marvelwebsite1.jpg';
import marvel2 from '../../images/marvelwebsite2.jpg';
import snowflake1 from '../../images/snowflakegame1.png';
import snowflake2 from '../../images/snowflakegame2.png';
import moviely1 from '../../images/moviely1.png';
import moviely2 from '../../images/moviely2.png';
import frutigeraero from '../../images/frutigeraero.gif';

function TabContent({ activeTab }) {
    const { t } = useTranslation();

    if (activeTab === 'Information') {
        return <div className="tab-content"> 
        <div className='gif-image'>
        <img src={frutigeraero} alt="frutigeraero" height="440" width="440" />
        </div>
        </div>;
    }
    if (activeTab === 'Portfolio') {
        return <div className="tab-content">
         <ul className="portfolio-list">
         <li>
          <p id='DungGeunMo'>{t('content.title1')}</p>
          <div className="images">
           <img src={marvel1} alt="marvelwebsite1" height="110" width="200" />
           <img src={marvel2} alt="marvelwebsite2" height="110" width="200" />
          </div>
            <p id='Monoplexfont'>
            {t('content.p1')}
            </p>
            
            <p id='DungGeunMo'>{t('content.title2')}</p>
            <div className="images">
            <img src={snowflake1} alt="snowflakegame1" height="170" width="200" />
            <img src={snowflake2} alt="snowflakegame2" height="170" width="200" /> 
            </div>
            <p id='Monoplexfont'>
            {t('content.p2')}
            </p>
            
            <p id='DungGeunMo'>{t('content.title3')}</p>
            <div className="images">
            <img src={moviely1} alt="moviely1" height="165" width="200" /> 
            <img src={moviely2} alt="moviely2" height="165" width="200" /> 
            </div>
            <p id='Monoplexfont'>
            {t('content.p3')}
            </p>
        </li>
        </ul>
        </div>;
    }
    if (activeTab === 'Story') {
        return <div className="tab-content"> 
        <p id='Galmuri11'>
        {t('content.p4')}
        </p>
        
        </div>;
    }
    return null;
}

export default TabContent;