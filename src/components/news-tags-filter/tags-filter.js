import React, { useState, useEffect } from 'react';
import styles from './tags-filter.module.css';
import FilterItem from './filter-item/filter-item';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SET_SELECTED_NEWS_TAG } from '../../services/actions/newsTagFilter';
import { useHistory } from 'react-router';

export default function TagsFilter({ reducer, place }) {
  const { currentNewsFilter, categories } = useSelector((store) => store.newsTagFilter);

  const [isSectionExpanded, setIsSectionExpanded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    if (category && place === '/news') {
      dispatch({
        type: SET_SELECTED_NEWS_TAG,
        filter: category,
      });
    }
    if (currentNewsFilter !== 'Все') {
      history.push(`/news/${currentNewsFilter}`);
    }
  }, [dispatch, category, place, currentNewsFilter, history]);

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
              <FilterItem
                key={index}
                text={item}
                currentTag={currentNewsFilter}
                reducer={reducer}
                place={place}
              />
            ))}
        </div>
        <button name="Раскрыть теги" onClick={toggleTagsSectionExpansion} className={styles.button}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </button>
      </div>
    </div>
  );
}
