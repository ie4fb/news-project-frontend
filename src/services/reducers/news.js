import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../actions/news';

const initialState = {
  news: [],
  newsReqest: false,
  newsRequestFailed: false,
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS: {
      return {
        ...state,
        newsReqest: true,
      };
    }
    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        newsReqest: false,
        newsRequestFailed: false,
        news: action.news
      };
    }
    case GET_NEWS_FAILURE: {
        return {
          ...state,
          newsReqest: false,
          newsRequestFailed: true,
        };
      }
    default: {
      return state;
    }
  }
}
