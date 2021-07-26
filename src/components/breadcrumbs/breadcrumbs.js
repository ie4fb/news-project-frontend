import React, { useState, useEffect } from 'react';
import styles from './breadcrumbs.module.css';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_NEWS_TAG } from '../../services/actions/newsTagFilter';
import { SET_SELECTED_BLOGS_TAG } from '../../services/actions/blogsTagFilter';

export default function Breadcrumbs() {
  const [path, setPath] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const { category, id } = useParams();
  const [lastCrumb, setLastCrumb] = useState(null);

  const { news } = useSelector((store) => store.news);
  const { blogs } = useSelector((store) => store.blogs);

  useEffect(() => {
    if (news) {
      if (location.pathname.split('/')[1] === 'news') {
        setPath('Новости');
      } else if (location.pathname.split('/')[1] === 'blogs') {
        setPath('Блоги');
      } else {
        setPath('Каналы');
      }
      setLastCrumb(news.filter((x) => x._id === id)[0] || blogs.filter((x) => x._id === id)[0]);
    }
  }, [location, id, news, blogs]);

  const setCategory = () => {
    if (location.pathname.split('/')[1] === 'news') {
      dispatch({
        type: SET_SELECTED_NEWS_TAG,
        filter: lastCrumb.category,
      });
    } else if (location.pathname.split('/')[1] === 'blogs') {
      dispatch({
        type: SET_SELECTED_BLOGS_TAG,
        filter: lastCrumb.category,
      });
    }
  };

  return (
    <>
      {lastCrumb && (
        <div className={styles.container}>
          <a href={`/`} className={styles.crumb}>
            Главная&nbsp;
          </a>
          {` / `}
          <Link
            to={`/${location.pathname.split('/')[1]}`}
            className={styles.crumb}
          >
            &nbsp;{path}&nbsp;
          </Link>
          {` / `}
          <Link
            onClick={() => {
              setCategory();
            }}
            to={`/${location.pathname.split('/')[1]}/${lastCrumb.category}`}
            className={styles.crumb}
          >
            &nbsp;{category}&nbsp;
          </Link>
          {` / `}
          <span>&nbsp;{lastCrumb.heading}</span>
        </div>
      )}
    </>
  );
}
