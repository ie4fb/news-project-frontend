import styles from './player.module.css';
import { useSelector } from 'react-redux';
export default function PlayerBlock() {
  const { windowSize } = useSelector((store) => store.app);

  const height = `${
    windowSize.width > 1440 ? 1440 * 0.56 * 0.8 : windowSize.width * 0.56 * 0.8
  }px`;
  const width = `${windowSize.width > 1440? 1440 * 0.8 : windowSize.width * 0.8}`;
  return (
    <section className={styles.container}>
      <iframe
        src='https://player.vimeo.com/video/113379354'
        width={width}
        height={height}
        frameborder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowfullscreen
        title='Видео'
      ></iframe>
    </section>
  );
}
