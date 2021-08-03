import { getNews } from '../../utils/api';
export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_SUCCESS = 'SET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'SET_NEWS_SUCCESS';
export const SET_RENDER_COUNT = 'SET_RENDER_COUNT';
export const SET_TOP_RENDER_COUNT = 'SET_TOP_RENDER_COUNT';
export const SET_NEWS_DATA_CHUNKS = 'SET_DATA_CHUNKS'
export const RENDER_ADDITIONAL_CHUNKS = 'RENDER_ADDITIONAL_CHUNKS'

export function getNewsData() {
  return function (dispatch) {
    dispatch({
      type: GET_NEWS,
    });
    getNews()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_NEWS_SUCCESS,
            news: res,
          });
        } else {
          dispatch({
            type: GET_NEWS_FAILURE,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: GET_NEWS_FAILURE,
        });
      });
  };
}
