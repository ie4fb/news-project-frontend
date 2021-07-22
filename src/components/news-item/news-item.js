import { useEffect, useState } from 'react';
import styles from './news-item.module.css';
import commentsIcon from '../../images/icons/comments.svg';
import commentsIcon_light from '../../images/icons/comments_light.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/utils';

export default function NewsItem({ item, type, index, maxCount }) {
  const history = useHistory();


  const openArticle = () => {
    history.push(`/news/${item.category}/${item._id}`);
  };

  useEffect(() => {});

  const formattedDate = formatDate(item);

  return (
    <>
      <div className={`${styles.item}`} onClick={openArticle}>
        <p
          className={`${styles.tag} ${type === 'dark' ? styles.tag_dark : ''}`}
        >
          {item.category}
        </p>
        <h2
          className={`${styles.heading} ${
            type === 'dark' ? styles.heading_dark : ''
          }`}
        >
          {item.heading.length > 60
            ? item.heading.split('').slice(0, 60).join('') + '...'
            : item.heading}
        </h2>
        <p
          className={`${styles.text} ${
            type === 'dark' ? styles.text_dark : ''
          }`}
        >
          {item.description.length > 100
            ? item.description.split('').slice(0, 100).join('') + '...'
            : item.description}
        </p>
        <div className={styles.bottom_wrapper}>
          <p
            className={`${styles.date} ${
              type === 'dark' ? styles.date_dark : ''
            }`}
          >
            {formattedDate}
          </p>
          <div className={styles.comments_wrapper}>
            <img
              src={type === 'dark' ? commentsIcon : commentsIcon_light}
              className={styles.icon}
              alt='иконка'
            />
            <p
              className={`${styles.comments_count} ${
                type === 'dark' ? styles.comments_count_dark : ''
              }`}
            >
              {item.comments.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
