import styles from './player.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import playIcon from '../../images/play-icon.svg';
import { channelsData } from '../../utils/utils';
import ChannelItem from './channel-item/channel-item';
export default function PlayerBlock() {
  const { windowSize, isMobile } = useSelector((store) => store.app);


  function useScript(url) {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  }

  useScript("../../utils/playerjs-broadcasts.js");

  

  const [hideIframe, setHideIframe] = useState(true);

  const width =
    windowSize.width > 1440
      ? Math.floor(1440 * 0.7)
      : windowSize.width < 768
      ? Math.floor(windowSize.width - 30)
      : Math.floor(windowSize.width * 0.6);

  const height = Math.floor(width / 1.78);
  // windowSize.width > 1440
  //   ? Math.floor(1440 * 0.56 * 0.8)
  //   : Math.floor(windowSize.width * 0.56 * 0.8)

  const toggleIframe = () => {
    setHideIframe(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ul
          style={{
            height: `${windowSize.width < 768 ? '145px' : height + 'px'}`,
          }}
          className={styles.channels}
        >
          {channelsData.map((item, index) => (
            <ChannelItem item={item} />
          ))}
        </ul>
        <div className={styles.wrapper}>
          {hideIframe ? (
                        <div id="player"></div>
            // <>
            //   <img
            //     style={{
            //       minWidth: '320px',
            //       minHeight: '179.77px',
            //       height: height,
            //       width: `${width}px`,
            //       cursor: 'pointer',
            //     }}
            //     src={`${
            //       !isMobile
            //         ? 'https://i.vimeocdn.com/video/498674697?mw=1400&mh=784&q=70'
            //         : 'https://i.vimeocdn.com/video/498674697?mw=768&mh=440&q=70'
            //     }`}
            //     alt='Видео плеер'
            //     onClick={toggleIframe}
            //   />
            //   <img
            //     onClick={toggleIframe}
            //     src={playIcon}
            //     alt='Иконка плей'
            //     style={{
            //       width: '5vw',
            //       height: '5vw',
            //       minWidth: '50px',
            //       minHeight: '50px',
            //       position: 'absolute',
            //       top: `${isMobile ? '40%' : '43%'}`,
            //       left: `${isMobile ? '43%' : '47.5%'}`,
            //       cursor: 'pointer',
            //     }}
            //   />
            // </>
          ) : (
            // <iframe
            //   src='https://player.vimeo.com/video/113379354'
            //   width={width}
            //   height={height}
            //   frameborder='0'
            //   allow='autoplay; fullscreen; picture-in-picture'
            //   allowfullscreen
            //   title='Видео'
            // ></iframe>
            <div id="player"></div>
          )}
        </div>
      </div>
    </section>
  );
}
