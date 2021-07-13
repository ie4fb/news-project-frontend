import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import headerStyles from './header.module.css';
import Tab from '../tab/tab';
import { useHistory } from 'react-router';
import TimeBoard from '../time-board/time-board';
import Navigation from '../navigation/navigation';

export default function AppHeader({handleMenuClick, isNavbarActive}) {
  const [activeTab, setActiveTab] = useState('/');
  const history = useHistory();

  const handleTabChange = (path) => {
    setActiveTab(path);
  };

  useEffect(() => {
    setActiveTab(history.location.pathname);
  },[])

  const windowSize = useWindowSize();

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.wrapper}>
        <a className={headerStyles.link} href='/'>
          <div className={headerStyles.logo}></div>
        </a>
        {windowSize.width > 768 ? (
          <>
            <div className={headerStyles.tabs}>
              <Tab
                path='/news'
                label='новости'
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <Tab
                path='/blog'
                label='блоги'
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <Tab
                path='/channels'
                label='каналы'
                activeTab={activeTab}
                onClick={handleTabChange}
              />
            </div>
            {windowSize.width > 1060 && <TimeBoard />}
            
          </>
        ) : (
          <button
            onClick={handleMenuClick}
            className={`${headerStyles.button} ${isNavbarActive ? headerStyles.open : ''}`}
            type='button'
          >
            <span className={headerStyles.button_bar}></span>
            <span className={headerStyles.button_bar}></span>
            <span className={headerStyles.button_bar}></span>
          </button>
        )}
      </div>
      {windowSize.width < 769 && <Navigation isNavbarActive={isNavbarActive} activeTab={activeTab} handleMenuClick={handleMenuClick} handleTabChange={handleTabChange}/>}
    </header>
  );
}
