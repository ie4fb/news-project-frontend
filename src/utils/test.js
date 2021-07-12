import { useEffect } from "react";
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
} from "./api";

const userSample = {
  email: "test@example.com",
  password: "test",
};

const newsSample = {
  renderData: {
    blocks: [
      {
        key: "7mj9j",
        text: "",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          src: "https://www.kommersant.ru/Issues.photo/DAILY/2021/119M/KNN_005236_00020_1_t219_223034.jpg",
          type: "image",
          display: "big",
        },
      },
      {
        key: "3us89",
        text: "test",
        type: "header-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 71,
            style: "BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  heading: "test2",
  description: "test testovich",
  link: "https://www.kommersant.ru/doc/4898417",
  image:
    "https://www.kommersant.ru/Issues.photo/DAILY/2021/119M/KNN_005236_00020_1_t219_223034.jpg",
  date: "Mon, 12 Jul 2021 00:39:00 +0300",
  category: "test",
};

const idSample = "60ecbd37c05672079455248a";

const commentSample = {
  author: "Mark Zuckerberg",
  date: "12 мая 14:88",
  text: "Хочу передать привет бабушке",
};

const commentIdSample = {comment : '60ecbe381537bd37e840a6cc'};

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
