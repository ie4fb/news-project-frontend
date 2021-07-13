import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, Route, useHistory, Switch, Redirect } from "react-router-dom";
import AppHeader from "../header/header";
import { getNewsData } from "../../services/actions/news";
import { getTagsData } from "../../services/actions/tagFilter";

import Main from "../main/main";
import NewsEditor from "../news-editor/news-editor";
import NewsArticle from "../news-article/news-article";
import Footer from "../footer/footer";
import TagsFilter from "../tags-filter/tags-filter";
import NewsBlockTop from "../news-block-top/news-block-top";
import Breadcrubs from "../breadcrumbs/breadcrumbs";
import NewsBlockLarge from "../news-block-large/news-block-large";
import Login from "../login/login";
// import Admin from '../admin/admin';
import { ProtectedRoute } from "../protected-route/protected-route";

import appStyles from "./app.module.css";

const tags = [
  "Политика",
  "Общество",
  "Бизнес",
  "Экономика",
  "Происшествия",
  "Мир",
  "Инвестировать",
  "Телекоммуникации",
  "Финансы. Рынок",
  "Занять",
  "В городе",
  "Культура",
  "Спорт",
];

function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  //const [news, setNews] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const [content, setContent] = useState(null);
  const [newsByCategory, setNewsByCategory] = useState(null);

  const { news } = useSelector((state) => state.news);
  const { categories } = useSelector((state) => state.tagFilter);

  const getExchangeRates = () => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    const newsByCategory = {};
    categories.forEach((tag) => {
      newsByCategory[tag] = news.filter((item) => item.category === tag);
    });
    newsByCategory["Все"] = news;
    setContent(news);
    setNewsByCategory(newsByCategory);
  }, [news, categories]);

  const handleMenuClick = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getNewsData());
    dispatch(getTagsData());
    getExchangeRates();
  }, [dispatch]);

  return (
    <Router history={history} basename="/">
      <AppHeader
        handleMenuClick={handleMenuClick}
        isNavbarActive={isNavbarActive}
      />
      <Switch>
        <Route exact path="/news">
          <TagsFilter place={"/news"} categories={tags} />
          <Main>
            {newsByCategory && (
              <>
                <NewsBlockTop content={newsByCategory} />
                <NewsBlockLarge content={newsByCategory} />
                {/* <NewsEditor content={content} /> */}
              </>
            )}
          </Main>
        </Route>
        <Route exact path="/news/:category">
          <TagsFilter place={"/news"} categories={tags} />
          <Main>
            {newsByCategory && (
              <>
                <NewsBlockTop content={newsByCategory} />
              </>
            )}
          </Main>
        </Route>
        <Route exact path="/news/:category/:id">
          <Main>
            {content && (
              <>
                <Breadcrubs />
                <NewsArticle content={content} />
              </>
            )}
          </Main>
        </Route>
        <Route exact path="/blogs"></Route>
        <Route exact path="/channels"></Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute path={`/admin`} exact={true}>
          {content && <NewsEditor content={content} />}
        </ProtectedRoute>
        <Route>
          <Redirect to={"/"} />
        </Route>
        F
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
