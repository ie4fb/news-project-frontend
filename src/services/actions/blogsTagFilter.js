import { getBlogsTags } from "../../utils/api";
export const SET_SELECTED_BLOGS_TAG ='SET_SELECTED_TAG';
export const GET_BLOGS_TAGS = 'UPDATE_CATEGORIES_LIST';
export const GET_BLOGS_TAGS_SUCCESS = 'GET_BLOGS_TAGS_SUCCESS';
export const GET_BLOGS_TAGS_FAILURE = 'GET_BLOGS_TAGS_FAILURE';



export function getBlogsTagsData() {
    return function (dispatch) {
      dispatch({
        type: GET_BLOGS_TAGS,
      });
      getBlogsTags()
        .then((res) => {
          if (res) {
            dispatch({
              type: GET_BLOGS_TAGS_SUCCESS,
              blogsCategories: res,
            });
          } else {
            dispatch({
              type: GET_BLOGS_TAGS_FAILURE,
            });
          }
        })
        .catch((res) => {
          dispatch({
            type: GET_BLOGS_TAGS_FAILURE,
          });
        });
    };
  }