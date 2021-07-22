import React, { useEffect } from 'react';
import styles from './blogs-item.module.css';
import { useSelector } from 'react-redux';
import commentsIcon from '../../images/icons/comments.svg';
import { useHistory } from 'react-router';

export default function BlogsItem({ gridArea, isGrid, content }) {
  const history = useHistory();

  const onClick = () => {
    history.push(`/blogs/${content.category}/${content._id}`);
  };

  return (
    <>
      {content && (
        <article
          onClick={onClick}
          style={isGrid ? { gridArea: `${gridArea}` } : {}}
          className={styles.container}
        >
          <img
            className={styles.background_image}
            src={content.image}
            alt='изображение записи'
          />
          <div className={styles.background}></div>
          <p className={styles.tag}>{content.category}</p>
          <div className={styles.author_container}>
            <div className={styles.avatar}>
              {content.source[0].toUpperCase()}
            </div>
            <p className={styles.name}>{content.source}</p>
          </div>
          <h3 className={styles.heading}>{content.heading}</h3>
          <div className={styles.bottom_wrapper}>
            <p className={`${styles.date}`}>12 МАЯ 2021</p>
            <div className={styles.comments_wrapper}>
              <img src={commentsIcon} className={styles.icon} alt='иконка' />
              <p className={`${styles.comments_count}`}>
                {content.comments.length}
              </p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
