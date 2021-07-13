import { getNews } from '../../utils/api';
export const GET_NEWS = 'SET_NEWS';
export const GET_NEWS_SUCCESS = 'SET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'SET_NEWS_SUCCESS';

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
