import React, { useState, useEffect } from 'react';
import styles from './breadcrumbs.module.css';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_SELECTED_TAG } from '../../services/actions/tagFilter';

export default function Breadcrubs() {
  const [path, setPath] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.split('/')[1] === 'news') {
      setPath('Новости');
    } else if (location.pathname.split('/')[1] === 'blogs') {
      setPath('Блоги');
    } else {
      setPath('Каналы');
    }
    console.log()
  }, [location]);

  const setCategory = () => {
    dispatch({
        action: SET_SELECTED_TAG,
        filter: ''
    })
  }


  return (
    <div className={styles.container}>
        <Link to={`/`}className={styles.crumb}>Главная&nbsp;</Link>{` / `}
      <Link onClick={()=>{console.log('haha')}} to={`/${location.pathname.split('/')[1]}`}className={styles.crumb}>&nbsp;{path}&nbsp;</Link>{` / `}
    </div>
  );
}
