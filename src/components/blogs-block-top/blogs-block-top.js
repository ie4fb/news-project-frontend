import styles from './blogs-block-top.module.css';
import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import BlogsItem from '../blogs-item/blogs-item';

export default function BlogsBlockTop() {
  const { blogsTopBlockChunk } = useSelector((store) => store.blogs);

  useEffect(() => console.log())

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          {blogsTopBlockChunk &&
            blogsTopBlockChunk.map((item) => <BlogsItem isGrid={false} content={item} />)}
        </div>
      </section>
    </>
  );
}
