import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router, Route, useHistory, Switch, Redirect } from 'react-router-dom';
import AppHeader from '../header/header';
import { getNewsData } from '../../services/actions/news';
import { getBlogsData } from '../../services/actions/blogs';
import { getBlogsTagsData } from '../../services/actions/blogsTagFilter';
import { getNewsTagsData } from '../../services/actions/newsTagFilter';
import Blogs from '../../pages/blogs';

import Main from '../main/main';
import NewsEditor from '../news-editor/news-editor';
import NewsCreator from '../news-creator/news-creator';
import NewsArticle from '../news-article/news-article';
import Footer from '../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Login from '../login/login';
import { ProtectedRoute } from '../protected-route/protected-route';
import useWindowSize from '../../hooks/useWindowSize';
import AdminNews from '../admin-news/admin-news';
import Admin from '../admin/admin';
import {
  SET_RENDER_COUNT,
  SET_TOP_RENDER_COUNT,
  SET_NEWS_DATA_CHUNKS,
} from '../../services/actions/news';
import { SET_BLOGS_DATA_CHUNKS } from '../../services/actions/blogs';
import {
  TOGGLE_MOBILE_STATE,
  SET_WINDOW_SIZE,
} from '../../services/actions/app';

import News from '../../pages/news';

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
  const history = useHistory();
  const dispatch = useDispatch();

  const { news, renderCount, topRenderCount, additionalChunksRendered } =
    useSelector((state) => state.news);
  const {
    blogs,
    blogsRenderCount,
    blogsTopRenderCount,
    blogsAdditionalChunksRendered,
  } = useSelector((state) => state.blogs);
  const { blogsCategories, currentBlogFilter } = useSelector(
    (state) => state.blogsTagFilter
  );

  const { isMobile } = useSelector((store) => store.app);
  const { currentNewsFilter } = useSelector((state) => state.newsTagFilter);
  const windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width > 768
      ? dispatch({ type: TOGGLE_MOBILE_STATE, issMobile: false })
      : dispatch({ type: TOGGLE_MOBILE_STATE, isMobile: true });
    dispatch({ type: SET_WINDOW_SIZE, windowSize: windowSize });
  }, [windowSize, dispatch]);

  const createNewsDataBatch = useCallback(
    (news, currentFilter) => {
      const middleCount = isMobile ? 7 : 5;
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
        type: SET_NEWS_DATA_CHUNKS,
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

  const createBlogsDataBatch = useCallback(
    (blogs, currentFilter) => {
      const middleCount = 4;
      const categoryBlogs =
        currentFilter === 'Все'
          ? blogs
          : blogs.filter((item) => item.category === currentFilter);
      const totalBlogsItems = !isMobile ? 11 : 7;

      if (totalBlogsItems > categoryBlogs.length) {
        blogs.forEach((item) => {
          if (
            !categoryBlogs.find((x) => x === item) &&
            categoryBlogs.length < totalBlogsItems
          ) {
            categoryBlogs.push(item);
          }
        });
      }
      const topBlockChunk = categoryBlogs.slice(0, 3);
      const largeBlockChunk = categoryBlogs.slice(
        topBlockChunk.length,
        topBlockChunk.length + middleCount
      );
      const bottomBlockChunk = categoryBlogs.slice(
        topBlockChunk.length + largeBlockChunk.length,
        topBlockChunk.length + largeBlockChunk.length + 4
      );
      const createAdditionalChunks = (array, totalBlogsItems) => {
        const perChunk = 4;
        const inputArray = array.slice(totalBlogsItems);
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
        type: SET_BLOGS_DATA_CHUNKS,
        topBlockChunk: topBlockChunk,
        largeBlockChunk: largeBlockChunk,
        bottomBlockChunk: bottomBlockChunk,
        additionalChunks: createAdditionalChunks(categoryBlogs, totalBlogsItems),
        showLoadButton:
        categoryBlogs.length > totalBlogsItems &&
          createAdditionalChunks(categoryBlogs, totalBlogsItems).length >
          blogsAdditionalChunksRendered,
      });
    },
    [isMobile, renderCount, dispatch, blogsAdditionalChunksRendered]
  );

  useEffect(() => {
    if (news && news.length && currentNewsFilter) {
      createNewsDataBatch(news, currentNewsFilter);
    }
  }, [news, currentNewsFilter, createNewsDataBatch]);

  useEffect(() => {
    if (blogs && blogs.length && currentBlogFilter) {
      createBlogsDataBatch(blogs, currentBlogFilter);
    }
  }, [blogs, currentBlogFilter, createBlogsDataBatch]);

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
    dispatch(getNewsTagsData());
    dispatch(getBlogsData());
    dispatch(getBlogsTagsData());
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
          <News />
        </Route>
        <Route exact path='/news/:category'>
          <News />
        </Route>
        <Route exact path='/news/:category/:id'>
          <Main>
            <>
              <Breadcrumbs />
              <NewsArticle />
            </>
          </Main>
        </Route>
        <Route exact path='/blogs'>
          <Blogs />
        </Route>
        <Route exact path='/blogs/:category'>
          <Blogs />
        </Route>
        <Route exact path='/blogs/:category/:id'>
          <Main>
            <>
              <Breadcrumbs />
              <NewsArticle />
            </>
          </Main>
        </Route>
        <Route exact path='/channels'></Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <ProtectedRoute path={`/admin`} exact={true}>
          <Admin />
        </ProtectedRoute>
        <ProtectedRoute path={`/admin/news`} exact={true}>
          <AdminNews />
        </ProtectedRoute>
        <ProtectedRoute path={'/admin/news/edit/:id'} exact={true}>
          <NewsEditor />
        </ProtectedRoute>
        <ProtectedRoute path={'/admin/news/add/'} exact={true}>
          <NewsCreator />
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
