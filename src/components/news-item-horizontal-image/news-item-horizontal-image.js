import styles from './news-item-horizontal-image.module.css';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/utils';
import commentsIcon_light from '../../images/icons/comments_light.svg';

export default function NewsItemHorizontalImage({
  item,
  additionalStyle,
  isFirstBlock,
  maxTextLength,
  maxHeadingLength,
  isMobile
}) {
  const history = useHistory();
  const openArticle = () => {
    history.push(`/news/${item.category}/${item._id}`);
  };

  const formattedDate = item ? formatDate(item) : '';
  return (
    <>
      {item && (
        <div onClick={openArticle} className={styles.wrapper} style={{ gridArea: additionalStyle }}>
          <div className={`${styles.line} ${styles.line_top}`}></div>
          <div className={`${styles.line} ${styles.line_bottom}`}></div>
          <img
            className={styles.image}
            src={item.image}
            alt='изображение новости'
          />
          <div className={styles.container}>
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
