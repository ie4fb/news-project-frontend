import React, { useEffect, useCallback, useState } from 'react';
import styles from './news-block-bottom.module.css';
import NewsItemHorizontal from '../news-item-horizontal/news-item-horizontal';
import NewsItem from '../news-item/news-item';
import { useSelector } from 'react-redux';

export default function NewsBlockBottom() {

  const { renderCount, topRenderCount, bottomBlockChunk } = useSelector((store) => store.news);

  const { isMobile, windowSize } = useSelector((store) => store.app);


  return (
    <>
      {bottomBlockChunk && (
        <section className={styles.container}>
          <div className={`${styles.wrapper_top} ${styles.wrapper}`}>
            {bottomBlockChunk.slice(0, topRenderCount).map((item, index) => (
              <NewsItemHorizontal
                key={index}
                maxTextLength={
                  windowSize.width > 1200 ? 100 : isMobile ? 300 : 50
                }
                maxHeadingLength={windowSize.width > 1200 ? 30 : isMobile? 40 :20}
                isFirstBlock={false}
                additionalStyle={'horizontal'}
                item={item}
                isMobile={isMobile}
                isBottom={true}
              />
            ))}
          </div>
          {!isMobile && (
            <div className={`${styles.wrapper_bottom} ${styles.wrapper}`}>
              {bottomBlockChunk.slice(topRenderCount, topRenderCount + renderCount).map((item, index) => (
                <NewsItem key={index} item={item} type={'light'} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
