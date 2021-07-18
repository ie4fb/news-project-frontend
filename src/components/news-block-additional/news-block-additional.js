import styles from './news-block-additional.module.css';
import React from 'react';
import NewsItemVertical from '../news-item-vertical/news-item-vertical';
import NewsItemHorizontal from '../news-item-horizontal/news-item-horizontal';
import { useSelector } from 'react-redux';

export default function NewsBlockAdditional({ chunk, index }) {
  const { isMobile, windowSize } = useSelector((store) => store.app);
  const {additionalChunksRendered} = useSelector(store => store.news)
  
  if( additionalChunksRendered <= index ) {
    return null
  }
  return (
    <>
      {chunk  && (
        <section className={styles.container}>
          <div className={styles.content}>
            <NewsItemVertical
              additionalStyle={'vertical_top'}
              item={chunk[0]}
              isMobile={isMobile}
              maxTextLength={300}
            />
            <NewsItemHorizontal
              maxTextLength={windowSize.width > 1200 ? 80 : isMobile ? 150 : 50}
              maxHeadingLength={
                windowSize.width > 1200 ? 50 : isMobile ? 100 : 20
              }
              isFirstBlock={false}
              additionalStyle={'single'}
              item={chunk[1]}
              isMobile={isMobile}
            />
          </div>
        </section>
      )}
    </>
  );
}
