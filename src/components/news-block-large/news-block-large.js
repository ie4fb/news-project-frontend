import styles from './news-block-large.module.css';
import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import NewsItemVertical from '../news-item-vertical/news-item-vertical';
import NewsItemHorizontal from '../news-item-horizontal/news-item-horizontal';
import NewsItemHorizontalImage from '../news-item-horizontal-image/news-item-horizontal-image';
import useWindowSize from '../../hooks/useWindowSize';

export default function NewsBlockLarge({ content }) {
  const [itemsToRender, setItemsToRender] = useState(null);
  const [renderCount, setRenderCount] = useState(4);
  const location = useLocation();
  const windowSize = useWindowSize();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <NewsItemVertical
          additionalStyle={'vertical_top'}
          item={content['Все'][0]}
        />
        <NewsItemHorizontal
          maxTextLength={windowSize.width > 1200 ? 200 : 50}
          maxHeadingLength={windowSize.width > 1200 ? 50 : 20}
          isFirstBlock={true}
          additionalStyle={'horizontal'}
          item={content['Все'][0]}
        />
        <NewsItemHorizontal
          maxTextLength={windowSize.width > 1200 ? 130 : 50}
          maxHeadingLength={windowSize.width > 1200 ? 50 : 20}
          isFirstBlock={false}
          additionalStyle={'single'}
          item={content['Все'][0]}
        />
        <NewsItemVertical
          additionalStyle={'vertical_bottom'}
          item={content['Все'][0]}
        />
        <NewsItemHorizontalImage
          item={content['Все'][0]}
          maxTextLength={windowSize.width > 1200 ? 130 : 50}
          additionalStyle={'horizontal_image'}
          maxHeadingLength={windowSize.width > 1200 ? 50 : 20}
        />
      </div>
    </section>
  );
}
