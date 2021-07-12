import styles from './filter-item.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_TAG } from "../../services/actions/tagFilter";

export default function FilterItem ({ text, onClick })  {

  const { currentFilter } = useSelector(store => store.tagFilter);
  const dispatch = useDispatch();
  const changeCurrentFilter = () => {
    console.log(text, currentFilter);
    
    dispatch({
      type: SET_SELECTED_TAG,
      filter: text,
    })
  }

    
    return (
      <div onClick={changeCurrentFilter}
        className={`${styles.container} ${currentFilter === text? styles.active: ''}`}
      >
        <p className={styles.label}>{text}</p>
      </div>
    );
  }