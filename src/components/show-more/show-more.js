import styles from './show-more.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RENDER_ADDITIONAL_CHUNKS } from '../../services/actions/news';

export default function ShowMore() {
  const { additionalChunksRendered } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({
      type: RENDER_ADDITIONAL_CHUNKS,
      additionalChunksRendered: additionalChunksRendered + 1,
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        Показать еще
      </button>
    </div>
  );
}
