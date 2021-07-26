import React from 'react';
import styles from './blogs-item-minimal.module.css';
import commentsIcon from '../../images/icons/comments_light.svg';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/utils';

export default function BlogsItemMinimal({ gridArea, isGrid, content }) {
  const history = useHistory();

  const onClick = () => {
    history.push(`/blogs/${content.category}/${content._id}`);
  };
  const formattedDate = formatDate(content);

  return (
    <>
      {content && (
        <article
          onClick={onClick}
          style={isGrid ? { gridArea: `${gridArea}` } : {}}
          className={styles.container}
        >
          <p className={styles.tag}>{content.category}</p>
          <div className={styles.author_container}>
            <div className={styles.avatar}>
              {content.source[0].toUpperCase()}
            </div>
            <p className={styles.name}>{content.source}</p>
          </div>
          <h3 className={styles.heading}>{content.heading}</h3>
          <div className={styles.bottom_wrapper}>
            <p className={`${styles.date}`}>{formattedDate}</p>
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
