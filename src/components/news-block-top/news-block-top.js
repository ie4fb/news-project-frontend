import React, { useEffect, useState } from 'react';
import styles from './news-block-top.module.css';
import NewsItem from '../news-item/news-item';
import { useSelector } from 'react-redux';

export default function NewsBlockTop() {

  const { topBlockChunk } = useSelector((store) => store.news);

  return (
    <>
      {topBlockChunk && (
        <section className={styles.container}>
          <h1 className={styles.heading}>Новости</h1>
          <div className={styles.wrapper}>
            {topBlockChunk.map((item, index) => (
              <NewsItem key={index} item={item} type={'dark'} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
