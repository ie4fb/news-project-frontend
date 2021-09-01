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
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  }

  useScript('../../utils/playerjs-broadcasts.js');

  const [hideIframe, setHideIframe] = useState(true);

  const width =
    windowSize.width > 1440
      ? Math.floor(1440 * 0.7)
      : windowSize.width < 768
      ? Math.floor(windowSize.width - 30)
      : Math.floor(windowSize.width * 0.6);

  const height = Math.floor(width / 1.78);

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
          <div id='player'></div>
        </div>
      </div>
    </section>
  );
}
