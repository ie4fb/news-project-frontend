import styles from './filter-item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_BLOGS_TAG } from '../../../services/actions/blogsTagFilter';
import { useHistory } from 'react-router';

export default function FilterItem({ text, onClick, place }) {
  const { currentBlogFilter } = useSelector((store) => store.blogsTagFilter);
  const history = useHistory();
  const dispatch = useDispatch();
  const changeCurrentFilter = () => {
    history.push(`${place}/${text === 'Все' ? '' : text}`);
    dispatch({
      type: SET_SELECTED_BLOGS_TAG,
      filter: text,
    });
  };

  return (
    <div
      onClick={changeCurrentFilter}
      className={`${styles.container} ${
        currentBlogFilter === text ? styles.active : ''
      }`}
    >
      <p className={styles.label}>{text}</p>
    </div>
  );
}
