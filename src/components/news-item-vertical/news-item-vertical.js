import styles from './news-item-vertical.module.css';
import commentsIcon_light from '../../images/icons/comments_light.svg';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/utils';

export default function NewsItemVertical({ item, additionalStyle, showLine, isMobile, maxTextLength }) {
  const history = useHistory();
  const openArticle = () => {
    history.push(`/news/${item.category}/${item._id}`);
  };

  const formattedDate = item ? formatDate(item) : '';

  return (
    <>
      {item && (
        <div
          style={{ gridArea: `${additionalStyle}` }}
          onClick={openArticle}
          className={styles.container}
        >
          {showLine && <div className={`${styles.line} ${styles.line_bottom}`}></div>}
          <img
            className={styles.image}
            src={item.image}
            alt='изображение новости'
          />
          <p className={`${styles.tag}`}>{item.category}</p>
          <h3 className={styles.heading}>{item.heading}</h3>
          <p className={styles.text}>
            {`${item.description.split('').slice(0, maxTextLength).join('') + '...'}`}
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
      )}
    </>
  );
}
