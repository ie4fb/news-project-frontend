import React, { useState, useEffect } from 'react';
import styles from './tags-filter.module.css';
import FilterItem from '../filter-item/filter-item';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SET_SELECTED_TAG } from '../../services/actions/tagFilter';
import { useHistory } from 'react-router';

export default function TagsFilter(props) {
  const [isSectionExpanded, setIsSectionExpanded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      dispatch({
        type: SET_SELECTED_TAG,
        filter: category,
      });
    }
  }, [dispatch, category]);

  const { currentTag, categories } = useSelector((store) => store.tagFilter);

  const toggleTagsSectionExpansion = () => {
    setIsSectionExpanded((prevState) => !prevState);
  };

  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.wrapper}`}>
        <div
          className={`${styles.tags} ${
            isSectionExpanded ? styles.tags_expanded : ''
          }`}
        >
          {categories &&
            categories.map((item, index) => (
              <FilterItem key={index} text={item} currentTag={currentTag} place={props.place} />
            ))}
        </div>
        <button onClick={toggleTagsSectionExpansion} className={styles.button}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </button>
      </div>
    </div>
  );
}
