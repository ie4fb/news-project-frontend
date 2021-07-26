import styles from './news-block-large.module.css';
import React from 'react';
import NewsItemVertical from '../news-item-vertical/news-item-vertical';
import NewsItemHorizontal from '../news-item-horizontal/news-item-horizontal';
import NewsItemHorizontalImage from '../news-item-horizontal-image/news-item-horizontal-image';
import CurrencyBlock from '../currency-block/currency-block';
import { useSelector } from 'react-redux';
import NewsItemMobile from '../news-item-mobile/news-item-mobile';

export default function NewsBlockLarge() {
  const { isMobile, windowSize } = useSelector((store) => store.app);
  const { largeBlockChunk } = useSelector((store) => store.news);

  return (
    <>
      {largeBlockChunk && (
        <section className={styles.container}>
          <div className={styles.content}>
            {isMobile && <CurrencyBlock />}
            <NewsItemVertical
              additionalStyle={'vertical_top'}
              item={largeBlockChunk[0]}
              isMobile={isMobile}
              maxTextLength={300}
            />
            {!isMobile && (
              <NewsItemHorizontal
                maxTextLength={windowSize.width > 1200 ? 350 : 150}
                maxHeadingLength={windowSize.width > 1200 ? 100 : 50}
                isFirstBlock={true}
                additionalStyle={'horizontal'}
                item={largeBlockChunk[1]}
                isMobile={isMobile}
              />
            )}
            <NewsItemHorizontal
              maxTextLength={
                windowSize.width > 1200 ? 120 : isMobile ? 150 : 120
              }
              maxHeadingLength={
                windowSize.width > 1200 ? 50 : isMobile ? 100 : 50
              }
              isFirstBlock={false}
              additionalStyle={'single'}
              item={isMobile ? largeBlockChunk[1] : largeBlockChunk[2]}
              isMobile={isMobile}
            />
            <NewsItemVertical
              additionalStyle={'vertical_middle'}
              item={isMobile ? largeBlockChunk[2] : largeBlockChunk[3]}
              showLine={isMobile ? false : true}
              isMobile={isMobile}
              maxTextLength={300}
            />
            {!isMobile && (
              <NewsItemHorizontalImage
                item={largeBlockChunk[4]}
                maxTextLength={windowSize.width > 1200 ? 130 : 50}
                additionalStyle={'horizontal_image'}
                maxHeadingLength={windowSize.width > 1200 ? 50 : 50}
                isMobile={isMobile}
              />
            )}
            {isMobile && (
              <>
                <div className={styles.news_wrapper}>
                  <NewsItemMobile item={largeBlockChunk[3]} />
                  <NewsItemMobile item={largeBlockChunk[4]} />
                  <NewsItemMobile item={largeBlockChunk[5]} />{' '}
                  <div className={styles.news_wrapper_line}> </div>
                </div>
                <NewsItemVertical
                  additionalStyle={'vertical_bottom'}
                  item={largeBlockChunk[6]}
                  showLine={isMobile ? false : true}
                  isMobile={isMobile}
                  maxTextLength={300}
                />
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
