import styles from './admin-news.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { formatDate } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { getNewsData } from '../../services/actions/news';
import { deleteNews } from '../../utils/api';

export default function AdminNews() {
  const { news } = useSelector((store) => store.news);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(null);
  const [pagesButtons, setPagesButtons] = useState(null);

  useEffect(() => {
    if (news) {
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
    history.push(`/admin/news/edit/${e.target.id}`);
  };
  const onAddClick = () => {
    history.push('/admin/news/add');
  };
  const deleteNewsEntry = (e) => {
    deleteNews(e.target.id).then(() => {
      dispatch(getNewsData());
    });
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.news_heading}>Новости</h1>
      <div className={styles.button_contaner}>
        <button onClick={onAddClick} className={styles.add_button}>
          Добавить новость
        </button>
      </div>
      <ul className={styles.news}>
        {(page === 0 ? news : news.slice((page - 1) * 30, page * 30)).map(
          (item) => (
            <li key={item._id} className={styles.news_item} id={item._id}>
              <img
                id={item._id}
                src={item.image}
                alt='картинка новости'
                className={styles.item_image}
              ></img>
              <p id={item._id} className={styles.item_heading}>
                {item.heading}
              </p>

              <p className={`${styles.item_heading} ${styles.date}`}>
                {formatDate(item)}
              </p>
              <p className={`${styles.tag}`}>{item.category}</p>
              <button
                name='Редактировать'
                onClick={onClick}
                id={item._id}
                className={`${styles.edit_button} ${styles.add_button}`}
              >
                Редактировать
              </button>
              <button
                name='Удалить'
                onClick={deleteNewsEntry}
                id={item._id}
                className={`${styles.delete_button} ${styles.add_button}`}
              >
                Удалить
              </button>
            </li>
          )
        )}
      </ul>
      <div className={styles.button_contaner}>
        <button
          onClick={onPageButtonClick}
          name="Кнопка страницы"
          id={0}
          className={`${styles.page_button}`}
        >
          Все
        </button>
        {pagesButtons &&
          pagesButtons.map((item) => (
            <button
              onClick={onPageButtonClick}
              name="Кнопка страницы"
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
