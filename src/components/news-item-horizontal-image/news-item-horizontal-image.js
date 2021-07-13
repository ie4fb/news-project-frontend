import styles from './news-item-horizontal-image.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/utils';
import commentsIcon_light from '../../images/icons/comments_light.svg';
import useWindowSize from '../../hooks/useWindowSize';

export default function NewsItemHorizontalImage({
  item,
  additionalStyle,
  isFirstBlock,
  maxTextLength,
  maxHeadingLength,
}) {
  const history = useHistory();
  const [isMobile, setIsMobile] = useState(false);
  const openArticle = () => {
    history.push(`/news/${item.category}/${item._id}`);
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width > 768 ? setIsMobile(false) : setIsMobile(true);
  }, [windowSize]);

  const formattedDate = item ? formatDate(item) : '';
  return (
    <>
      {item && (
        <div className={styles.wrapper} style={{ gridArea: additionalStyle }}>
          <img
            className={styles.image}
            src={item.image}
            alt='изображение новости'
          />
          <div onClick={openArticle} className={styles.container}>
            <p className={`${styles.tag}`}>{item.category}</p>
            <h3 className={styles.heading}>
              {' '}
              {`${
                !isMobile
                  ? item.heading.split('').slice(0, maxHeadingLength).join('') +
                    '...'
                  : item.heading
              }`}
            </h3>
            <p className={styles.text}>
              {`${
                !isMobile
                  ? item.description
                      .split('')
                      .slice(0, maxTextLength)
                      .join('') + '...'
                  : item.description.split('').slice(0, 300).join('') + '...'
              }`}
            </p>
            <div className={styles.bottom_wrapper}>
              <p className={`${styles.date}`}>{formattedDate}</p>
              <div className={styles.comments_wrapper}>
                <img
                  src={commentsIcon_light}
                  className={styles.icon}
                  alt='иконка'
                />
                <p className={`${styles.comments_count}`}>
                  {item.comments.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
