import React, { useRef, useState, useEffect } from 'react';
import styles from './commentaries.module.css';
import { formatDate } from '../../utils/utils';
import { putComment, deleteComment, deleteBlogsComment, putBlogsComment} from '../../utils/api';
import { useParams } from 'react-router';


export default function Commentaries({ data, editMode, path }) {
  const nameInputRef = useRef(null);
  const textInputRef = useRef(null);
  const [comments, setComments] = useState(data);
  const { id } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const item = {
      author: nameInputRef.current.value,
      text: textInputRef.current.value,
      date: formatDate({ date: now }),
    };
    nameInputRef.current.value = ''
    textInputRef.current.value = ''
    if(path === 'news') {
      putComment(item, id).then((data) => setComments(data.comments));
    } else {
      putBlogsComment(item, id).then((data) => setComments(data.comments));
    }

  };

  const onDelete = (item) => {
    if(path === 'news') {
      deleteComment({ comment: item._id }, id).then((data) => {
        setComments(data.comments);
      });
    } else {
      deleteBlogsComment({ comment: item._id }, id).then((data) => {
        setComments(data.comments);
      });
    }

  };

  const Commentary = ({ item }) => (
    <div className={styles.commentary}>
      <div className={styles.info}>
        <p className={styles.author}>{item.author}</p>
        <div className={styles.date}>{item.date}</div>
      </div>
      <p className={styles.text}>{item.text}</p>
      {editMode ? (
        <button onClick={() => onDelete(item)} className={styles.delete_button}>
          Удалить
        </button>
      ) : null}
    </div>
  );

  useEffect(() => {
    if (data && !comments) {
      setComments(data);
    }
  }, [comments, data]);



  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Комментарии</h3>
      {comments && comments.map((item) => <Commentary item={item} />)}
      <form className={styles.edit_container} onSubmit={onSubmit}>
        <input
          minLength='2'
          maxLength='40'
          className={`${styles.input_name} ${styles.input}`}
          placeholder='Ваше имя'
          name='author'
          ref={nameInputRef}
        />
        <textarea
          minLength='2'
          maxLength='150'
          className={`${styles.input_text} ${styles.input}`}
          placeholder='Ваш комментарий'
          name='text'
          ref={textInputRef}
        />
        <button name="Отправить"className={styles.button}>Отправить сообщение</button>
      </form>
    </section>
  );
}
