import TagsFilter from '../components/blogs-tags-filter/tags-filter';
import Main from '../components/main/main';
import BlogsBlockTop from '../components/blogs-block-top/blogs-block-top';
import { useSelector, useDispatch } from 'react-redux';
import BlogsBlockLarge from '../components/blogs-block-large/blogs-block-large';
import ShowMore from '../components/show-more/show-more';
import { useEffect } from 'react';
import { SET_ACTIVE_TAB } from '../services/actions/app';

export default function Blogs() {
  const {
    blogsLargeBlockChunk,
    blogsBottomBlockChunk,
    blogsAdditionalChunks,
    blogsShowLoadButton,
  } = useSelector((state) => state.blogs);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SET_ACTIVE_TAB,
      tab: 'blogs',
    });
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TagsFilter reducer={'newsTagFilter'} place={'/blogs'} />
      <Main>
        <>
          <BlogsBlockTop />
          <BlogsBlockLarge
            mirrored={false}
            data={blogsLargeBlockChunk}
            isAdditional={false}
          />
          <BlogsBlockLarge
            mirrored={true}
            data={blogsBottomBlockChunk}
            isAdditional={false}
          />
          {blogsAdditionalChunks &&
            blogsAdditionalChunks.map((chunk, index) => (
              <BlogsBlockLarge
                mirrored={!(index % 2 === 0)}
                data={chunk}
                isAdditional={true}
                index={index}
                key={index}
              />
            ))}
          {blogsShowLoadButton && <ShowMore place='blogs' />}
        </>

      </Main>
    </>
  );
}
