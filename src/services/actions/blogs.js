import { getBlogs } from '../../utils/api';
export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE';
export const SET_BLOGS_RENDER_COUNT = 'SET_BLOGS_RENDER_COUNT';
export const SET_BLOGS_TOP_RENDER_COUNT = 'SET_BLOGS_TOP_RENDER_COUNT';
export const SET_BLOGS_DATA_CHUNKS = 'SET_BLOGS_DATA_CHUNKS'
export const RENDER_ADDITIONAL_BLOGS_CHUNKS = 'RENDER_ADDITIONAL_BLOGS_CHUNKS'

export function getBlogsData() {
  return function (dispatch) {
    dispatch({
      type: GET_BLOGS,
    });
    getBlogs()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_BLOGS_SUCCESS,
            blogs: res,
          });
        } else {
          dispatch({
            type: GET_BLOGS_FAILURE,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: GET_BLOGS_FAILURE,
        });
      });
  };
}
