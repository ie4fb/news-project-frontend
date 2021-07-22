import styles from './filter-item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_NEWS_TAG } from '../../../services/actions/newsTagFilter';
import { SET_SELECTED_BLOGS_TAG } from '../../../services/actions/blogsTagFilter';
import { useHistory } from 'react-router';

export default function FilterItem({ text, onClick, place, reducer }) {
  const { currentNewsFilter } = useSelector((store) => store.newsTagFilter);
  const history = useHistory();
  const dispatch = useDispatch();
  const changeCurrentFilter = () => {
    console.log(place)
    history.push(`${place}/${text === 'Все' ? '' : text}`);

    if (place === '/news') {
      dispatch({
        type: SET_SELECTED_NEWS_TAG,
        filter: text,
      });
    } else if (place === '/blogs') {
      dispatch({
        type: SET_SELECTED_BLOGS_TAG,
        filter: text,
      });
    }
  };

  return (
    <div
      onClick={changeCurrentFilter}
      className={`${styles.container} ${
        currentNewsFilter === text ? styles.active : ''
      }`}
    >
      <p className={styles.label}>{text}</p>
    </div>
  );
}
