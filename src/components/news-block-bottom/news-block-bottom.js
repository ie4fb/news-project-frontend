import React from 'react';
import styles from './news-block-bottom.module.css';
import NewsItemHorizontal from '../news-item-horizontal/news-item-horizontal';
import NewsItem from '../news-item/news-item';
import { useSelector } from 'react-redux';

export default function NewsBlockBottom({ type, chunk, index }) {
  const {
    renderCount,
    topRenderCount,
    bottomBlockChunk,
    additionalChunksRendered,
  } = useSelector((store) => store.news);

  const { isMobile, windowSize } = useSelector((store) => store.app);

  if (type === 'additional' && additionalChunksRendered <= index) {
    return <></>;
  }

  return (
    <>
      {(bottomBlockChunk || chunk) && (
        <section className={styles.container}>
          <div className={`${styles.wrapper_top} ${styles.wrapper}`}>
            {type !== 'additional'
              ? bottomBlockChunk
                  .slice(0, topRenderCount)
                  .map((item, index) => (
                    <NewsItemHorizontal
                      key={index}
                      maxTextLength={
                        windowSize.width > 1200 ? 100 : isMobile ? 300 : 50
                      }
                      maxHeadingLength={
                        windowSize.width > 1200 ? 90 : isMobile ? 70 : 50
                      }
                      isFirstBlock={false}
                      additionalStyle={'horizontal'}
                      item={item}
                      isMobile={isMobile}
                      isBottom={true}
                    />
                  ))
              : chunk
                  .slice(0, topRenderCount)
                  .map((item, index) => (
                    <NewsItemHorizontal
                      key={index}
                      maxTextLength={
                        windowSize.width > 1200 ? 100 : isMobile ? 300 : 50
                      }
                      maxHeadingLength={
                        windowSize.width > 1200 ? 90 : isMobile ? 90 : 50
                      }
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
              {type !== 'additional'
                ? bottomBlockChunk
                    .slice(topRenderCount, topRenderCount + renderCount)
                    .map((item, index) => (
                      <NewsItem key={index} item={item} type={'light'} />
                    ))
                : chunk
                    .slice(topRenderCount, topRenderCount + renderCount)
                    .map((item, index) => (
                      <NewsItem key={index} item={item} type={'light'} />
                    ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
