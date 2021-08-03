import { getTags } from "../../utils/api";
export const SET_SELECTED_NEWS_TAG ='SET_SELECTED_NEWS_TAG';
export const GET_NEWS_TAGS = 'GET_NEWS_TAGS';
export const GET_NEWS_TAGS_SUCCESS = 'GET_NEWS_TAGS_SUCCESS';
export const GET_NEWS_TAGS_FAILURE = 'GET_NEWS_TAGS_FAILURE';



export function getNewsTagsData() {
    return function (dispatch) {
      dispatch({
        type: GET_NEWS_TAGS,
      });
      getTags()
        .then((res) => {
          if (res) {
            dispatch({
              type: GET_NEWS_TAGS_SUCCESS,
              categories: res,
            });
          } else {
            dispatch({
              type: GET_NEWS_TAGS_FAILURE,
            });
          }
        })
        .catch((res) => {
          dispatch({
            type: GET_NEWS_TAGS_FAILURE,
          });
        });
    };
  }