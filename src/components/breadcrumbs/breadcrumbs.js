import React, { useState, useEffect } from 'react';
import styles from './breadcrumbs.module.css';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_TAG } from '../../services/actions/tagFilter';

export default function Breadcrubs() {
  const [path, setPath] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const { category, id } = useParams();
  const [lastCrumb, setLastCrumb] = useState(null);

  const { news } = useSelector((store) => store.news);


  useEffect(() => {
    if (news) {
      if (location.pathname.split('/')[1] === 'news') {
        setPath('Новости');
      } else if (location.pathname.split('/')[1] === 'blogs') {
        setPath('Блоги');
      } else {
        setPath('Каналы');
      }
      setLastCrumb(news.filter((x) => x._id === id)[0]);
    }
  }, [location, id, news]);

  const setCategory = () => {
      dispatch({
        type: SET_SELECTED_TAG,
        filter: lastCrumb.category,
      });
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
          <span>&nbsp;{lastCrumb .heading}</span>
        </div>
      )}
    </>
  );
}
