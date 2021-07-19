import styles from './admin.module.css';
import { Link } from 'react-router-dom';
export default function Admin() {



  return (
    <section className={styles.container}>
      <h1 className={styles.news_heading}>Панель администрирования</h1>
      <Link className={styles.link} to={'/admin/news'}>Новости</Link>
      <Link className={styles.link} to={'/admin/blogs'}>Блоги</Link>
    </section>
  );
}
