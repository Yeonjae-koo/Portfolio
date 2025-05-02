import { useState } from 'react';
import Tabs from './Tabs';
import TabContent from './TabContent';

function MainWindow() {
  const [activeTab, setActiveTab] = useState('Information');

  return (
    <div className="main-window">
      {/* ① 탭 버튼만 담는 창 */}
      <div className="tabs-window">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* ② 실제 컨텐츠 영역 */}
      <div className="tab-content-window">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default MainWindow;
