import React, { useRef } from 'react';
import styles from './commentaries.module.css';

export default function Commentaries({ data }) {
  const nameInputRef = useRef(null);
  const textInputRef = useRef(null);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value, textInputRef.current.value)
  };

  const Commentary = ({ item }) => (
    <div className={styles.commentary}>
      <div className={styles.info}>
        <p className={styles.author}>{item.author}</p>
        <div className={styles.date}>{item.date}</div>
      </div>
      <p className={styles.text}>{item.text}</p>
    </div>
  );

  const EditSection = ({ onSubmit, refs}) => {
    return (
      <form className={styles.edit_container} onSubmit={onSubmit} >
        <input
          minLength='2'
          className={`${styles.input_name} ${styles.input}`}
          placeholder='Ваше имя'
          name='author'
          ref={refs.name}
        />
        <textarea
          minLength='2'
          className={`${styles.input_text} ${styles.input}`}
          placeholder='Ваш комментарий'
          name='text'
          ref={refs.text}
        />
        <button className={styles.button}>Отправить сообщение</button>
      </form>
    );
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Комментарии</h3>
      {data && data.map((item) => (
        <Commentary item={item} />
      ))}
      <EditSection onSubmit={onSubmit} refs={{name:nameInputRef, text:textInputRef}} />
    </section>
  );
}
