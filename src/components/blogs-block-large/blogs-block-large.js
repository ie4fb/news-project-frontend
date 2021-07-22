import styles from './blogs-block-large.module.css';
import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import BlogsItem from '../blogs-item/blogs-item';
import BlogsItemMinimal from '../blogs-item-minimal/blogs-item-minimal';

export default function BlogsBlockLarge({ mirrored, onBottom, data}) {

  useEffect(()=> console.log(data), [data]);

  return (
    <>
      <section className={styles.container}>
        {data && (
          <div
            className={`${styles.content} ${
              mirrored ? styles.content_mirrored : ''
            }`}
          >
            <BlogsItem isGrid={true} gridArea={'horizontal_image'} content={data[0]} />
            <BlogsItem isGrid={true} gridArea={'single_image'} content={data[1]} />

            <BlogsItemMinimal isGrid={true} gridArea={'horizontal'} content={data[2]}/>
            <BlogsItemMinimal isGrid={true} gridArea={'single'} content={data[3]} />
          </div>
        )}
      </section>
    </>
  );
}
