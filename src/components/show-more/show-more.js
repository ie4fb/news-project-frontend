import styles from './show-more.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RENDER_ADDITIONAL_CHUNKS } from '../../services/actions/news';
import { RENDER_ADDITIONAL_BLOGS_CHUNKS } from '../../services/actions/blogs';

export default function ShowMore({place}) {
  const { additionalChunksRendered } = useSelector((store) => store.news);
  const { blogsAdditionalChunksRendered } = useSelector((store) => store.blogs);
  const dispatch = useDispatch();
  const onClick = () => {
    if (place === 'news') {
      dispatch({
        type: RENDER_ADDITIONAL_CHUNKS,
        additionalChunksRendered: additionalChunksRendered + 1,
      });
    } else
      dispatch({
        type: RENDER_ADDITIONAL_BLOGS_CHUNKS,
        additionalChunksRendered: blogsAdditionalChunksRendered + 1,
      });
  };

  return (
    <div className={styles.container}>
      <button name="Показать еще" onClick={onClick} className={styles.button}>
        Показать еще
      </button>
    </div>
  );
}
