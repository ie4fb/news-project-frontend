import { cos } from 'prelude-ls';
import { useEffect, useState } from 'react';
import styles from './news-item.module.css';
import commentsIcon from '../../images/icons/comments.svg';
import commentsIcon_light from '../../images/icons/comments_light.svg';
import { useSelector } from 'react-redux';
export default function NewsItem({ item, type }) {
  console.log(item);
  const {currentFilter} = useSelector((store) => store.tagFilter);
  const date = new Date();
  console.log(date.toISOString(item.date), item.date);
  const months = [
    '',
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  const formattedDate = `${
    date.toISOString(item.date).split('').slice(0, 10).join('').split('-')[2]
  } ${
    months[
      parseInt(
        date
          .toISOString(item.date)
          .split('')
          .slice(0, 10)
          .join('')
          .split('-')[1]
      )
    ]
  } ${
    date.toISOString(item.date).split('').slice(0, 10).join('').split('-')[0]
  }`;
  console.log(formattedDate);

  return (
        <div className={`${styles.item}`}>
          <p
            className={`${styles.tag} ${
              type === 'dark' ? styles.tag_dark : ''
            }`}
          >
            {item.category}
          </p>
          <h2
            className={`${styles.heading} ${
              type === 'dark' ? styles.heading_dark : ''
            }`}
          >
            {item.heading.length > 33
              ? item.heading.split('').slice(0, 33).join('') + '...'
              : item.heading}
          </h2>
          <p
            className={`${styles.text} ${
              type === 'dark' ? styles.text_dark : ''
            }`}
          >
            {item.description.length > 75
              ? item.description.split('').slice(0, 75).join('') + '...'
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
  );
}
