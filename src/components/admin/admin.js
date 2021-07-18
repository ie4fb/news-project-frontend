import styles from './admin.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';

export default function Admin() {
  const { news } = useSelector((store) => store.news);
  const history = useHistory();

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(null);
  const [pagesButtons, setPagesButtons] = useState(null);

  useEffect(() => {
    if (news) {
      console.log(Math.ceil(news.length / 30));
      setPagesCount(Math.ceil(news.length / 30));
    }
  }, [news]);

  useEffect(() => {
    const arr = [];
    if (pagesCount) {
      for (let i = 1; i <= pagesCount; i++) {
        arr.push(i);
      }
    }
    setPagesButtons(arr);
  }, [pagesCount]);

  const onPageButtonClick = (e) => {
    setPage(parseInt(e.target.id));
  };

  const onClick = (e) => {
    console.log(e.target.id);
    history.push(`/admin/edit/${e.target.id}`);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.news_heading}>Новости</h1>
      <ul className={styles.news}>
        {(page === 0 ? news : news.slice((page - 1) * 30, page * 30)).map(
          (item) => (
            <li
              key={item._id}
              onClick={onClick}
              className={styles.news_item}
              id={item._id}
            >
              <img
                id={item._id}
                src={item.image}
                alt='картинка новости'
                className={styles.item_image}
              ></img>
              <p id={item._id} className={styles.item_heading}>
                {item.heading}
              </p>
            </li>
          )
        )}
      </ul>
      <div className={styles.button_contaner}>
        <button
          onClick={onPageButtonClick}
          id={0}
          className={`${styles.page_button}`}
        >
          Все
        </button>
        {pagesButtons &&
          pagesButtons.map((item) => (
            <button
              onClick={onPageButtonClick}
              id={item}
              className={`${styles.page_button} ${
                item === page ? styles.page_button_active : ''
              }`}
            >
              {item}
            </button>
          ))}
      </div>
    </section>
  );
}
