import { cos } from 'prelude-ls';
import { useEffect, useState } from 'react';
import styles from './news-item.module.css';

export default function NewsItem({ item, type }) {
  console.log(item);

  const date = new Date();
  console.log(date.toString(item.date), item.date);
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return (
    <div className={`${styles.item}`}>
      <p className={`${styles.tag} ${type === 'dark' ? styles.tag_dark : ''}`}>
        {item.category}
      </p>
      <h2
        className={`${styles.heading} ${
          type === 'dark' ? styles.heading_dark : ''
        }`}
      >
        {item.heading.split(' // ')[1].length > 33
          ? item.heading.split(' // ')[1].split('').slice(0, 33).join('') +
            '...'
          : item.heading.split(' // ')[1]}
      </h2>
      <p
        className={`${styles.text} ${type === 'dark' ? styles.text_dark : ''}`}
      >
        {item.description.length > 75
          ? item.description.split('').slice(0, 75).join('') + '...'
          : item.description}
      </p>
    </div>
  );
}
