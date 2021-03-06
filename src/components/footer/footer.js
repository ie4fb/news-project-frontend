import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.copyright}>&copy; 2021 Все права защищены</p>
        <nav className={styles.navigation}>
          <Link className={styles.link} to='/news'>
            Новости
          </Link>
          <Link className={styles.link} to='/blogs'>
            Блоги
          </Link>
          <Link className={styles.link} to='/channels'>
            Каналы
          </Link>
        </nav>
        <p className={styles.text}>
          На нашем портале вы сможете найти самые актуальные новости и
          интересные блоги.
        </p>
        <Link
          className={`${styles.avertisement_link} ${styles.link}`}
          to='/advertisement'
        >
          Реклама
        </Link>
        <p className={styles.restriction}>18+</p>
      </div>
    </footer>
  );
}
