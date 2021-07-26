import React, { useState, useEffect} from 'react'; 
import { useParams, useHistory } from 'react-router-dom';
import { convertToRaw} from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import 'megadraft/dist/css/megadraft.css';
import styles from './news-editor.module.css';
import ImagePlugin from 'megadraft/lib/plugins/image/plugin';
import NewsArticle from '../news-article/news-article';
import { useSelector } from 'react-redux';
import { updateNews, updateBlogs } from '../../utils/api';

export default function NewsEditor({path}) {
  const { news } = useSelector((store) => store.news);
  const { blogs } = useSelector((store) => store.blogs);
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [initialState, setInitialState] = useState(null);
  const [editorState, setEditorState] = useState(null);
  const [isSuccessFull, setIsSuccessfull] = useState(false);
  const [editData, setEditData] = useState({
    heading: null,
    link: null,
    description: null,
    date: null,
    category: null,
    image: null,
    renderData: null,
  });

  const history = useHistory();

  const onChange = (e) => {
    const stateCopy = editData;
    stateCopy[e.target.id] = e.target.value;
    setEditData(stateCopy);
  };

  useEffect(() => {
    if (news) {
      setContent(news.find((item) => item._id === id) || blogs.find((item) => item._id === id));
    }
    if (content) {
      setInitialState(editorStateFromRaw(content.renderData));
      setEditData({
        heading: content.heading,
        link: content.link,
        description: content.description,
        date: content.date,
        category: content.category,
        image: content.image,
        renderData: editData.renderData,
        source: content.source
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news, id, content, blogs]);

  useEffect(() => {
    if (initialState) {
      setEditorState(initialState);
    }
  }, [initialState]);

  const onBack = () => {
    history.push(`/admin/${path}`);
  };

  const handleUpdate = (editorState) => {
    setEditorState(editorState);
    const stateCopy = editData;

    stateCopy.renderData = convertToRaw(editorState.getCurrentContent());
    setEditData(stateCopy);
  };

  const onSave = () => {
    const stateCopy = editData;
    stateCopy.renderData = stateCopy.renderData
      ? stateCopy.renderData
      : convertToRaw(editorState.getCurrentContent());
    if( path === 'news') {
      updateNews(stateCopy, content._id).then(() => setIsSuccessfull(true));
    } else {
      updateBlogs(stateCopy, content._id).then(() => setIsSuccessfull(true));
    }

  };

  return (
    <main className={styles.content}>
      <h2 className={styles.preview_heading}>Превью</h2>
      {editorState && (
        <NewsArticle path={path} editMode={true} editModeData={editorState} />
      )}
      <h2 className={styles.preview_heading}>Редактор</h2>
      <div
        style={{
          marginLeft: '80px',
          width: 'calc(80% - 80px)',
          border: '1px solid black',
        }}
      >
        {editorState && (
          <MegadraftEditor
            plugins={[ImagePlugin]}
            editorState={editorState}
            onChange={handleUpdate}
          />
        )}
      </div>
      <p className={styles.subheading}>
        Для добавления или удаления комментариев сохранение не требуется.
      </p>
      <p className={styles.subheading}>
        Заголовок новости в карточке и в полном виде(сверху)
      </p>
      <input
        id='heading'
        onChange={onChange}
        className={styles.input}
        defaultValue={editData.heading}
        min='2'
      />
      <p className={styles.subheading}>Ссылка на картинку в карточке новости</p>
      <input
        id='image'
        onChange={onChange}
        className={styles.input}
        defaultValue={editData.image}
        min='2'
      />
      <p className={styles.subheading}>
        Текст в карточке новости, автоматически обрезается в зависимости от
        разрешения не влияет на текст статьи в полном виде
      </p>
      <textarea
        id='description'
        onChange={onChange}
        className={`${styles.input} ${styles.textarea}`}
        defaultValue={editData.description}
        min='2'
      />
      <p className={styles.subheading}>Категория(тег)</p>
      <input
        id='category'
        className={styles.input}
        onChange={onChange}
        defaultValue={editData.category}
        min='2'
      />
      <p className={styles.subheading}>Дата(лучше не трогать)</p>
      <input
        id='date'
        onChange={onChange}
        className={styles.input}
        defaultValue={editData.date}
        min='2'
        disabled={true}
      />
      <p className={styles.subheading}>Ссылка на статью</p>
      <input
        id='link'
        onChange={onChange}
        className={styles.input}
        defaultValue={editData.link}
        min='2'
      />
      <p className={styles.subheading}>Источник(по умолчанию Коммерсант)</p>
      <input
        id='link'
        onChange={onChange}
        className={styles.input}
        defaultValue={editData.source}
        min='2'
      />
      <button className={styles.button} onClick={onSave}>
        Сохранить
      </button>
      {isSuccessFull ? <span className={styles.status}>Успешно</span> : null}
      <button className={styles.button} onClick={onBack}>
        Вернуться к списку
      </button>
    </main>
  );
}
