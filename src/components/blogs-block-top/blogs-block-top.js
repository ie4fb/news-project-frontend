import styles from './blogs-block-top.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import BlogsItem from '../blogs-item/blogs-item';
import { Link } from 'react-router-dom';

export default function BlogsBlockTop({ onMain }) {
  const { blogsTopBlockChunk } = useSelector((store) => store.blogs);
  const { isMobile } = useSelector((store) => store.app);

  return (
    <>
      <section className={styles.container}>
        {onMain && !isMobile  && (
          <div className={styles.heading_wrapper}>
            <h2 className={styles.heading}>Блоги</h2>
            <Link className={styles.link} to='/blogs'>
                Читать все записи
                <div className={styles.arrow}></div>
              </Link>
          </div>
        )}
        <div className={styles.content}>
          {blogsTopBlockChunk &&
            blogsTopBlockChunk.map((item, index) => (
              <BlogsItem key={index} isGrid={false} content={item} />
            ))}
        </div>
      </section>
    </>
  );
}
