import PlayerBlock from '../components/player/player';
import Main from '../components/main/main';
import NewsBlockTop from '../components/news-block-top/news-block-top';
import NewsBlockLarge from '../components/news-block-large/news-block-large';
import BlogsBlockTop from '../components/blogs-block-top/blogs-block-top';
import BlogsBlockLarge from '../components/blogs-block-large/blogs-block-large';
import { useEffect } from 'react';
import { SET_ACTIVE_TAB } from '../services/actions/app';
import { useDispatch, useSelector } from 'react-redux';

export default function MainPage() {
  const { blogsLargeBlockChunk } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SET_ACTIVE_TAB,
      tab: ' ',
    });
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Main>
      <PlayerBlock />
      <NewsBlockTop onMain={true} />
      <NewsBlockLarge />
      <BlogsBlockTop onMain={true} />
      <BlogsBlockLarge
        mirrored={false}
        data={blogsLargeBlockChunk}
        isAdditional={false}
      />
    </Main>
  );
}
