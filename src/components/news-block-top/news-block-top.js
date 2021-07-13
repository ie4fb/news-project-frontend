import React, { useEffect, useCallback, useState } from 'react';
import styles from './news-block-top.module.css';
import NewsItem from '../news-item/news-item';
import { useSelector } from 'react-redux';

export default function NewsBlockTop({ content }) {
  const [itemsToRender, setItemsToRender] = useState(content.slice(0, 4));

  const { currentFilter } = useSelector((store) => store.tagFilter);

  const getFilteredNews = useCallback(() => {
    if (content && currentFilter !== 'all' && currentFilter) {
      console.log(content);
      const itemsToRender = content
        .filter(function (item) {
          return item.category === currentFilter;
        })
        .map(function (item) {
          return item;
        });
      setItemsToRender(itemsToRender.slice(0,4));
      //   const itemsToRender = content.findAll(
      //     (item) => item.category === currentFilter
      //   );
      //   console.log(itemsToRender);
    }
  }, [currentFilter, content]);

  useEffect(() => {
    getFilteredNews();
  }, [content, currentFilter, getFilteredNews]);

  return (
    <>
      {itemsToRender && (
        <section className={styles.container}>
          <h1 className={styles.heading}>Новости</h1>
          <div className={styles.wrapper}>
            {itemsToRender.map((item) => (
              <NewsItem item={item} type={'dark'} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
