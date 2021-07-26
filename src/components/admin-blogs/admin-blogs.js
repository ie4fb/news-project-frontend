import styles from './admin-blogs.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { formatDate } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { getBlogsData } from '../../services/actions/blogs';
import { getBlogsTagsData } from '../../services/actions/blogsTagFilter';
import { deleteBlogs } from '../../utils/api';

export default function AdminBlogs() {
  const { blogs } = useSelector((store) => store.blogs);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsData());
    dispatch(getBlogsTagsData());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(null);
  const [pagesButtons, setPagesButtons] = useState(null);

  useEffect(() => {
    if (blogs) {
      setPagesCount(Math.ceil(blogs.length / 30));
    }
  }, [blogs]);

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
    history.push(`/admin/blogs/edit/${e.target.id}`);
  };
  const onAddClick = () => {
    history.push('/admin/blogs/add');
  };
  const deleteNewsEntry = (e) => {
    deleteBlogs(e.target.id).then(() => {
      dispatch(getBlogsData());
    })
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.news_heading}>Блоги</h1>
      <div className={styles.button_contaner}>
        <button onClick={onAddClick} className={styles.add_button}>
          Добавить запись
        </button>
      </div>
      <ul className={styles.news}>
        {(page === 0 ? blogs : blogs.slice((page - 1) * 30, page * 30)).map(
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

              <p className={`${styles.item_heading} ${styles.date}`}>{formatDate(item)}</p>
              <p className={`${styles.tag}`}>{item.category}</p>
              <button
                onClick={onClick}
                id={item._id}
                className={`${styles.edit_button} ${styles.add_button}`}
              >
                Редактировать
              </button>
              <button
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
