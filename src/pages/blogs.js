import TagsFilter from '../components/blogs-tags-filter/tags-filter';
import Main from '../components/main/main';
import BlogsBlockTop from '../components/blogs-block-top/blogs-block-top';
import { useSelector } from 'react-redux';
import BlogsBlockLarge from '../components/blogs-block-large/blogs-block-large';
import NewsBlockAdditional from '../components/news-block-additional/news-block-additional';
import ShowMore from '../components/show-more/show-more';

export default function Blogs() {
  const {
    blogsLargeBlockChunk,
    blogsBottomBlockChunk,
    blogsAdditionalChunks,
    blogsShowLoadButton,
  } = useSelector((state) => state.blogs);

  const { isMobile } = useSelector((store) => store.app);

  return (
    <>
      <TagsFilter reducer={'newsTagFilter'} place={'/blogs'} />
      <Main>
        <>
          <BlogsBlockTop />
          <BlogsBlockLarge mirrored={false} data={blogsLargeBlockChunk} />
          <BlogsBlockLarge mirrored={true} data={blogsBottomBlockChunk} />
          {blogsShowLoadButton && <ShowMore />}
        </>
      </Main>
    </>
  );
}
