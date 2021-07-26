import TagsFilter from '../components/news-tags-filter/tags-filter';
import Main from '../components/main/main';
import NewsBlockTop from '../components/news-block-top/news-block-top';
import NewsBlockLarge from '../components/news-block-large/news-block-large';
import NewsBlockBottom from '../components/news-block-bottom/news-block-bottom';
import { useSelector, useDispatch } from 'react-redux';
import NewsBlockAdditional from '../components/news-block-additional/news-block-additional';
import ShowMore from '../components/show-more/show-more';
import { useEffect } from 'react';
import { SET_ACTIVE_TAB } from '../services/actions/app';

export default function News() {
  const { additionalChunks, showLoadButton } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SET_ACTIVE_TAB,
      tab: 'news',
    });
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isMobile } = useSelector((store) => store.app);
  return (
    <>
      <TagsFilter reducer={'newsTagFilter'} place={'/news'} />
      <Main>
        <>
          <NewsBlockTop />
          <NewsBlockLarge />
          <NewsBlockBottom />
          {additionalChunks &&
            additionalChunks.map((chunk, index) =>
              isMobile ? (
                <NewsBlockAdditional key={index} chunk={chunk} index={index} />
              ) : (
                <NewsBlockBottom
                  key={index}
                  index={index}
                  chunk={chunk}
                  type={'additional'}
                />
              )
            )}
          {showLoadButton && <ShowMore place={'news'} />}
        </>
      </Main>
    </>
  );
}
