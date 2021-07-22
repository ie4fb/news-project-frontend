import React, { useState, useEffect } from 'react';
import styles from './tags-filter.module.css';
import FilterItem from './filter-item/filter-item';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SET_SELECTED_NEWS_TAG } from '../../services/actions/newsTagFilter';
import { SET_SELECTED_BLOGS_TAG } from '../../services/actions/blogsTagFilter';
import { useHistory } from 'react-router';

export default function TagsFilter({ reducer, place }) {
  const { currentBlogFilter, blogsCategories } = useSelector(
    (store) => store.blogsTagFilter
  );

  const [isSectionExpanded, setIsSectionExpanded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    if (category && place === '/blogs') {
      dispatch({
        type: SET_SELECTED_BLOGS_TAG,
        filter: category,
      });
    }
    if (currentBlogFilter !== 'Все') {
      history.push(`/blogs/${currentBlogFilter}`);
    }
  }, [dispatch, category]);

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
          {blogsCategories &&
            blogsCategories.map((item, index) => (
              <FilterItem
                key={index}
                text={item}
                currentTag={currentBlogFilter}
                reducer={reducer}
                place={place}
              />
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
