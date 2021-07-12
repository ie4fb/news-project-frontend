import { useState, useEffect } from 'react';
import appStyles from './app.module.css';
import AppHeader from '../header/header';
import { Router, Route, useHistory, Switch } from 'react-router-dom';
import Main from '../main/main';
import NewsEditor from '../news-editor/news-editor';
import Footer from '../footer/footer';
import TagsFilter from '../tags-filter/tags-filter';

const tags = [
  'Политика',
  'Общество',
  'Бизнес',
  'Экономика',
  'Происшествия',
  'Мир',
  'Инвестировать',
  'Телекоммуникации',
  'Финансы. Рынок',
  'Занять',
  'В городе',
  'Культура',
  'Спорт',
];

function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const [content, setContent] = useState(null);
  const history = useHistory();

  const getNews = () => {
    return fetch('http://localhost:3001/news', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  };

  const handleMenuClick = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  useEffect(() => {
    getNews().then((data) => setContent(data[0]));
  }, []);

  return (
    <Router history={history} basename='/'>
      <AppHeader
        handleMenuClick={handleMenuClick}
        isNavbarActive={isNavbarActive}
      />

      <Switch>
        <Route exact path='/news'>
          <TagsFilter categories={tags} />
          <Main>
            {content && (
               <NewsEditor content={content} />
            )}
          </Main>
        </Route>
        <Route exact path='/blogs'></Route>
        <Route exact path='/channels'></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
