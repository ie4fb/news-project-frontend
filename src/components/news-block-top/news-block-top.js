import React from 'react';
import styles from './news-block-top.module.css';
import NewsItem from '../news-item/news-item';


export default function NewsBlockTop({content}) {

    const itemsToRender = content.slice(0, 4);



    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>Новости</h1>
            <div className={styles.wrapper}>
                {itemsToRender.map(item => (
                    <NewsItem item={item} type={'dark'}/>
                ))}
            </div>
        </section>
    )

}