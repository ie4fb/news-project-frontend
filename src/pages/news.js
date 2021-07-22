import TagsFilter from '../components/news-tags-filter/tags-filter';
import Main from '../components/main/main';
import NewsBlockTop from '../components/news-block-top/news-block-top';
import NewsBlockLarge from '../components/news-block-large/news-block-large';
import NewsBlockBottom from '../components/news-block-bottom/news-block-bottom';
import { useSelector } from 'react-redux';
import NewsBlockAdditional from '../components/news-block-additional/news-block-additional';
import ShowMore from '../components/show-more/show-more';

export default function News() {
  const {
    additionalChunks,
    showLoadButton,
  } = useSelector((state) => state.news);

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
          {showLoadButton && <ShowMore />}
        </>
      </Main>
    </>
  );
}
