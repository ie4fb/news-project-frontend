import React from 'react';
import styles from './news-block-top.module.css';
import NewsItem from '../news-item/news-item';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NewsBlockTop({ onMain }) {
  const { topBlockChunk } = useSelector((store) => store.news);
  const { isMobile } = useSelector((store) => store.app);

  return (
    <>
      {topBlockChunk && (
        <section className={styles.container}>
          <h1 className={styles.heading}>
            {onMain ? 'Последние новости' : 'Новости'}{' '}
          </h1>
          <div className={styles.wrapper}>
            {topBlockChunk.map((item, index) => (
              <NewsItem key={index} item={item} type={'dark'} />
            ))}
            {onMain && !isMobile && (
              <Link className={styles.link} to='/news'>
                Читать все новости 
                <div className={styles.arrow}></div>
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
