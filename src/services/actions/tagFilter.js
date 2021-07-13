import { getTags } from "../../utils/api";
export const SET_SELECTED_TAG ='SET_SELECTED_TAG';
export const GET_TAGS = 'UPDATE_CATEGORIES_LIST';
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE';



export function getTagsData() {
    return function (dispatch) {
      dispatch({
        type: GET_TAGS,
      });
      getTags()
        .then((res) => {
          if (res) {
            dispatch({
              type: GET_TAGS_SUCCESS,
              categories: res,
            });
          } else {
            dispatch({
              type: GET_TAGS_FAILURE,
            });
          }
        })
        .catch((res) => {
          dispatch({
            type: GET_TAGS_FAILURE,
          });
        });
    };
  }