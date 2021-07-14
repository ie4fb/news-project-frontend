import styles from './news-block-large.module.css';
import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import NewsItemVertical from '../news-item-vertical/news-item-vertical';
import NewsItemHorizontal from '../news-item-horizontal/news-item-horizontal';
import NewsItemHorizontalImage from '../news-item-horizontal-image/news-item-horizontal-image';
import CurrencyBlock from '../currency-block/currency-block';
import { useSelector } from 'react-redux';

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
                maxTextLength={windowSize.width > 1200 ? 180 : 50}
                maxHeadingLength={windowSize.width > 1200 ? 50 : 20}
                isFirstBlock={true}
                additionalStyle={'horizontal'}
                item={largeBlockChunk[1]}
                isMobile={isMobile}
              />
            )}
            <NewsItemHorizontal
              maxTextLength={windowSize.width > 1200 ? 80 : isMobile ? 150 : 50}
              maxHeadingLength={
                windowSize.width > 1200 ? 50 : isMobile ? 100 : 20
              }
              isFirstBlock={false}
              additionalStyle={'single'}
              item={isMobile?largeBlockChunk[1]: largeBlockChunk[2]}
              isMobile={isMobile}
            />
            <NewsItemVertical
              additionalStyle={'vertical_bottom'}
              item={isMobile?largeBlockChunk[2]: largeBlockChunk[3]}
              showLine={isMobile ? false : true}
              isMobile={isMobile}
              maxTextLength={300}
            />
            {!isMobile && (
              <NewsItemHorizontalImage
                item={largeBlockChunk[4]}
                maxTextLength={windowSize.width > 1200 ? 130 : 50}
                additionalStyle={'horizontal_image'}
                maxHeadingLength={windowSize.width > 1200 ? 50 : 20}
                isMobile={isMobile}
              />
            )}
          </div>
        </section>
      )}
    </>
  );
}
