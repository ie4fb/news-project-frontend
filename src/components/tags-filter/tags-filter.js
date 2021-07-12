import React, { useState } from 'react';
import styles from './tags-filter.module.css';
import FilterItem from '../filter-item/filter-item';
import { useDispatch, useSelector } from 'react-redux';


export default function TagsFilter(props) {
  const [isSectionExpanded, setIsSectionExpanded] = useState(false);

  const {currentTag, categories} = useSelector(store => store.tagFilter)

  const data = [{ category: 'politics', label: 'Политика' }];

  console.log(props.categories.length);

  //const currentTag = 'Политика';

  const toggleTagsSectionExpansion = () => {
      setIsSectionExpanded(prevState => !prevState)
  };

  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.tags} ${isSectionExpanded?styles.tags_expanded:''}`}>
          {props.categories.map((item, index) => (
            <FilterItem key={index} text={item} currentTag={currentTag} />
          ))}
        </div>
        <button onClick={toggleTagsSectionExpansion}className={styles.button}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </button>
      </div>
    </div>
  );
}
