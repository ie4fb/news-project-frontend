import styles from './admin.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function Admin() {
  const { news } = useSelector((store) => store.news);
  const  history  = useHistory();

  const onClick = (e) => {
      console.log(e.target.id);
      history.push(`/admin/edit/${e.target.id}`)
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.news_heading}>Новости</h1>
      <ul className={styles.news}>
        {news.map((item) => (
          <li key={item._id} onClick={onClick} className={styles.news_item} id={item._id}>
            <img
            id={item._id}
              src={item.image}
              alt='картинка новости'
              className={styles.item_image}
            ></img>
            <p id={item._id} className={styles.item_heading}>{item.heading}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
