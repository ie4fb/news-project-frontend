import React, { useEffect, useCallback, useState } from 'react';
import styles from './news-block-top.module.css';
import NewsItem from '../news-item/news-item';
import { useSelector } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';
import { useLocation } from 'react-router';

export default function NewsBlockTop({ content }) {
  const [itemsToRender, setItemsToRender] = useState(null);
  const [renderCount, setRenderCount] = useState(4);
  const location = useLocation();

  const { currentFilter } = useSelector((store) => store.tagFilter);

  const windowSize = useWindowSize();
  useEffect(() => {
    if (renderCount !== Math.floor(windowSize.width / 280)) {
      setRenderCount(
        Math.floor(windowSize.width / 280) > 4
          ? 4
          : Math.floor(windowSize.width / 280)
      );
    }
  }, [windowSize, renderCount, location]);

  useEffect(() => {
    if (content && renderCount && currentFilter) {
      setItemsToRender(content[currentFilter].slice(0, renderCount));
    }
  }, [content, renderCount, currentFilter]);

  return (
    <>
      {itemsToRender && (
        <section className={styles.container}>
          <h1 className={styles.heading}>Новости</h1>
          <div className={styles.wrapper}>
            {itemsToRender.map((item, index) => (
              <NewsItem key={index} item={item} type={'dark'} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
