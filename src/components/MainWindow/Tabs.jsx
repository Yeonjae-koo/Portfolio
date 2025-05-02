import { useTranslation } from 'react-i18next';

function Tabs({ activeTab, setActiveTab }) {
  const { t } = useTranslation();

  return (
    <>
      <button
        className={`tab-btn ${activeTab === 'Information' ? 'active' : ''}`}
        onClick={() => setActiveTab('Information')}
      >
        {'information'}
      </button>
      <button
        className={`tab-btn ${activeTab === 'Portfolio' ? 'active' : ''}`}
        onClick={() => setActiveTab('Portfolio')}
      >
        {'portfolio'}
      </button>
      <button
        className={`tab-btn ${activeTab === 'Story' ? 'active' : ''}`}
        onClick={() => setActiveTab('Story')}
      >
        {'story'}
      </button>
    </>
  );
}

export default Tabs;
