import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, SET_RENDER_COUNT, SET_TOP_RENDER_COUNT, SET_DATA_CHUNKS } from '../actions/news';

const initialState = {
  news: [],
  newsReqest: false,
  newsRequestFailed: false,
  isFirstBlockRendered: false,
  renderCount: null,
  topRenderCount: null,
  topBlockChunk: null,
  largeBlockChunk: null,
  bottomBlockChunk: null
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
      case SET_RENDER_COUNT: {
        return {
          ...state,
          renderCount: action.renderCount,
        }
      }
      case SET_TOP_RENDER_COUNT: {
        return {
          ...state,
          topRenderCount: action.topRenderCount,
        }
      }
      case SET_DATA_CHUNKS: {
        return{
          ...state,
          topBlockChunk: action.topBlockChunk,
          largeBlockChunk: action.largeBlockChunk,
          bottomBlockChunk: action.bottomBlockChunk
        }
      }
    default: {
      return state;
    }
  }
}
