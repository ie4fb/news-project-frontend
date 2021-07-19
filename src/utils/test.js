import { useEffect } from 'react';
import {
  getNews,
  getTags,
  getNewsByTag,
  register,
  login,
  logout,
  postNews,
  updateNews,
  deleteNews,
  putComment,
  deleteComment,
} from './api';

const userSample = {
  email: 'test@example.com',
  password: 'test',
};
export const newsSample = {
  renderData: {
    blocks: [
      {
        key: '7mj9j',
        text: '',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          src: 'https://www.kommersant.ru/Issues.photo/DAILY/2021/121/KMO_178291_00014_1_t219_224345.jpg',
          type: 'image',
          display: 'big',
        },
      },
      {
        key: '3us89',
        text: 'Заголовок новости',
        type: 'header-two',
        depth: 0,
        inlineStyleRanges: [{ offset: 0, length: 17, style: 'BOLD' }],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fcu0j',
        text: 'Текст новости',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  heading: 'Заголовок карточки',
  description:
    'Текст новости в карточке',
  link: 'https://ya.ru',
  image:
    'https://www.kommersant.ru/Issues.photo/DAILY/2021/121/KMO_178291_00014_1_t219_224345.jpg',
  date: 'Mon Jul 19 2021 16:57:19 GMT+0300',
  category: 'Категория',
};

const idSample = '60ecbd37c05672079455248a';

const commentSample = {
  author: 'Mark Zuckerberg',
  date: '12 мая 14:88',
  text: 'Хочу передать привет бабушке',
};

const commentIdSample = { comment: '60ecbe381537bd37e840a6cc' };

function Test() {
  useEffect(() => {
    getNews().then((data) => console.log(data));
    // getTags().then((data) => console.log(data));
    // getNewsByTag("Спорт").then((data) => console.log(data));
    // register(userSample).then((data) => console.log(data));
    // login(userSample).then((data) => console.log(data));
    // logout().then((data) => console.log(data));
    // postNews(newsSample).then((data) => console.log(data));
    // updateNews(newsSample, idSample).then((data) => console.log(data));
    // putComment(commentSample, idSample).then((data) => console.log(data));
    // deleteComment(commentIdSample, idSample).then((data) => console.log(data));
    // deleteNews(idSample).then((data) => console.log(data));
  }, []);

  return <div>123</div>;
}

export default Test;
