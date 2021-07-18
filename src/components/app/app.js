import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router, Route, useHistory, Switch, Redirect } from 'react-router-dom';
import AppHeader from '../header/header';
import { getNewsData } from '../../services/actions/news';
import { getTagsData } from '../../services/actions/tagFilter';

import Main from '../main/main';
import NewsEditor from '../news-editor/news-editor';
import NewsArticle from '../news-article/news-article';
import Footer from '../footer/footer';
import TagsFilter from '../tags-filter/tags-filter';
import NewsBlockTop from '../news-block-top/news-block-top';
import NewsBlockBottom from '../news-block-bottom/news-block-bottom';
import Breadcrubs from '../breadcrumbs/breadcrumbs';
import NewsBlockLarge from '../news-block-large/news-block-large';
import Login from '../login/login';
// import Admin from '../admin/admin';
import { ProtectedRoute } from '../protected-route/protected-route';
import useWindowSize from '../../hooks/useWindowSize';
import Admin from '../admin/admin';
import {
  SET_RENDER_COUNT,
  SET_TOP_RENDER_COUNT,
  SET_DATA_CHUNKS,
} from '../../services/actions/news';
import {
  TOGGLE_MOBILE_STATE,
  SET_WINDOW_SIZE,
} from '../../services/actions/app';
import ShowMore from '../show-more/show-more';
import NewsBlockAdditional from '../news-block-additional/news-block-additional';

import appStyles from './app.module.css';

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

  const [dataBatch, setDataBatch] = useState(null);

  //const [news, setNews] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const [content, setContent] = useState(null);
  const [newsByCategory, setNewsByCategory] = useState(null);

  const {
    news,
    renderCount,
    topRenderCount,
    additionalChunks,
    showLoadButton,
    additionalChunksRendered,
  } = useSelector((state) => state.news);

  const { isMobile } = useSelector((store) => store.app);
  const { categories } = useSelector((state) => state.tagFilter);
  const { currentFilter } = useSelector((state) => state.tagFilter);
  const windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width > 768
      ? dispatch({ type: TOGGLE_MOBILE_STATE, issMobile: false })
      : dispatch({ type: TOGGLE_MOBILE_STATE, isMobile: true });
    dispatch({ type: SET_WINDOW_SIZE, windowSize: windowSize });
  }, [windowSize, dispatch]);

  const middleCount = isMobile ? 7 : 5;

  const createDataBatch = useCallback(
    (news, currentFilter) => {
      const categoryNews =
        currentFilter === 'Все'
          ? news
          : news.filter((item) => item.category === currentFilter);
      const totalNewsItems = !isMobile
        ? topRenderCount + 2 * renderCount + middleCount
        : renderCount * 2 + middleCount;

      if (totalNewsItems > categoryNews.length) {
        news.forEach((item) => {
          if (
            !categoryNews.find((x) => x === item) &&
            categoryNews.length < totalNewsItems
          ) {
            categoryNews.push(item);
          }
        });
      }

      const topBlockChunk = categoryNews.slice(0, renderCount);

      const largeBlockChunk = categoryNews.slice(
        topBlockChunk.length,
        topBlockChunk.length + middleCount
      );

      const bottomBlockChunk = categoryNews.slice(
        topBlockChunk.length + largeBlockChunk.length,
        topBlockChunk.length +
          largeBlockChunk.length +
          topRenderCount +
          renderCount
      );

      const createAdditionalChunks = (array, totalNewsItems) => {
        const perChunk = isMobile ? 2 : bottomBlockChunk.length;
        const inputArray = array.slice(totalNewsItems);
        const result = inputArray.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / perChunk);
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, []);
        return result;
      };
      dispatch({
        type: SET_DATA_CHUNKS,
        topBlockChunk: topBlockChunk,
        largeBlockChunk: largeBlockChunk,
        bottomBlockChunk: bottomBlockChunk,
        additionalChunks: createAdditionalChunks(categoryNews, totalNewsItems),
        showLoadButton:
          categoryNews.length > totalNewsItems &&
          createAdditionalChunks(categoryNews, totalNewsItems).length >
            additionalChunksRendered,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMobile, topRenderCount, renderCount, dispatch, additionalChunksRendered]
  );

  useEffect(() => {
    if (news && news.length && currentFilter) {
      createDataBatch(news, currentFilter);
    }
  }, [news, currentFilter, createDataBatch]);

  useEffect(() => {
    if (news && news.length) {
      const newsByCategory = {};
      categories.forEach((tag) => {
        newsByCategory[tag] = news.filter((item) => item.category === tag);
      });
      newsByCategory['Все'] = news;
      setContent(news);
      setNewsByCategory(newsByCategory);
    }
  }, [news, categories]);

  const handleMenuClick = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (renderCount !== Math.floor(windowSize.width / 280)) {
      dispatch({
        type: SET_RENDER_COUNT,
        renderCount:
          Math.floor(windowSize.width / 280) > 4
            ? 4
            : Math.floor(windowSize.width / 280),
      });
    }
    if (topRenderCount !== Math.floor(windowSize.width / 400)) {
      dispatch({
        type: SET_TOP_RENDER_COUNT,
        topRenderCount:
          Math.floor(windowSize.width / 400) > 3
            ? 3
            : Math.floor(windowSize.width / 400),
      });
    }
  }, [windowSize, renderCount, topRenderCount, dispatch]);

  useEffect(() => {
    dispatch(getNewsData());
    dispatch(getTagsData());
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: SET_WINDOW_SIZE, windowSize: windowSize });
  }, [dispatch]);

  return (
    <Router history={history} basename='/'>
      <AppHeader
        handleMenuClick={handleMenuClick}
        isNavbarActive={isNavbarActive}
      />
      <Switch>
        <Route exact path='/news'>
          <TagsFilter place={'/news'} categories={tags} />
          <Main>
            <>
              <NewsBlockTop />
              <NewsBlockLarge />
              <NewsBlockBottom />
              {/* <NewsEditor content={content} /> */}
              {additionalChunks &&
                additionalChunks.map((chunk, index) =>
                  isMobile ? (
                    <NewsBlockAdditional
                      key={index}
                      chunk={chunk}
                      index={index}
                    />
                  ) : (
                    <NewsBlockBottom
                      key={index}
                      index={index}
                      chunk={chunk}
                      type={'additional'}
                    />
                  )
                )}
              {showLoadButton && <ShowMore />}
            </>
          </Main>
        </Route>
        <Route exact path='/news/:category'>
          <TagsFilter place={'/news'} categories={tags} />
          <Main>
            <NewsBlockTop />
            <NewsBlockLarge />
            <NewsBlockBottom />
            {additionalChunks &&
              additionalChunks.map((chunk, index) =>
                isMobile ? (
                  <NewsBlockAdditional
                    key={index}
                    index={index}
                    chunk={chunk}
                  />
                ) : (
                  <NewsBlockBottom
                    key={index}
                    index={index}
                    chunk={chunk}
                    type={'additional'}
                  />
                )
              )}
            {showLoadButton && <ShowMore />}
          </Main>
        </Route>
        <Route exact path='/news/:category/:id'>
          <Main>
            <>
              <Breadcrubs />
              <NewsArticle content={content} />
            </>
          </Main>
        </Route>
        <Route exact path='/blogs'></Route>
        <Route exact path='/channels'></Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <ProtectedRoute path={`/admin`} exact={true}>
          <Admin />
        </ProtectedRoute>
        <ProtectedRoute path={'/admin/edit/:id'} exact={true}>
          <NewsEditor />
        </ProtectedRoute>
        <Route>
          <Redirect to={'/'} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
