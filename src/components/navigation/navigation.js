import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import navigationStyles from './navigation.module.css';
import { useSelector } from 'react-redux';

function Navigation({ isNavbarActive, activeTab, handleTabChange, handleMenuClick }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isNavbarMounted, setIsNavbarMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const history = useHistory();
  const newsLinkRef = useRef(null);
  const blogsLinkRef = useRef(null);
  const channelsLinkRef = useRef(null);

  const { windowSize } = useSelector(store => store.app);

  useEffect(() => {
    isNavbarActive ? initiateMountSequence() : initiateUnmountSequence();
  }, [isNavbarActive]);

  useEffect(() => {
    windowSize.width < 768 ? setIsMobile(true) : setIsMobile(false);
  }, [windowSize]);

  const initiateMountSequence = () => {
    setIsNavbarMounted(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setIsNavbarVisible(true);
    }, 50);
  };

  useEffect(() => {
    setIsNavbarMounted(false);
  }, [history.location.pathname]);

  const initiateUnmountSequence = () => {
    setIsNavbarVisible(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setIsNavbarMounted(false);
    }, 200);
  };

  return (
    <>
      {(isNavbarMounted || !isMobile) && (
        <>
          <div
            className={`${navigationStyles.navigation} ${
              isNavbarVisible ? navigationStyles.navigation_opened : ''
            }`}
          >
            <div className={navigationStyles.navigation__content}>
              <nav className={navigationStyles.navigation__links}>
                <Link
                  ref={newsLinkRef}
                  onClick={() => {
                    handleTabChange('/news');
                    handleMenuClick();
                  }}
                  id={'/news'}
                  className={`${navigationStyles.link} ${
                    activeTab === '/news' ? navigationStyles.link_active : ''
                  }`}
                  to={'/news'}
                >
                  Новости
                </Link>
                <Link
                  ref={blogsLinkRef}
                  onClick={() => {
                    handleTabChange('/blogs');
                    handleMenuClick();
                  }}
                  id={'/blogs'}
                  className={`${navigationStyles.link} ${
                    activeTab === '/blogs' ? navigationStyles.link_active : ''
                  }`}
                  to={'/blogs'}
                >
                  Блоги
                </Link>
                <Link
                  ref={channelsLinkRef}
                  onClick={() => {
                    handleTabChange('/channels');
                    handleMenuClick();
                  }}
                  id={'/channels'}
                  className={`${navigationStyles.link} ${
                    activeTab === '/channels'
                      ? navigationStyles.link_active
                      : ''
                  }`}
                  to={'/channels'}
                >
                  Каналы
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Navigation;
