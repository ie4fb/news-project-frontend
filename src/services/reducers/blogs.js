import {
    GET_BLOGS,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE,
    SET_BLOGS_RENDER_COUNT,
    SET_BLOGS_TOP_RENDER_COUNT,
    SET_BLOGS_DATA_CHUNKS,
    RENDER_ADDITIONAL_BLOGS_CHUNKS,
  } from '../actions/blogs';
  
  const initialState = {
    blogs: [],
    blogsReqest: false,
    blogsRequestFailed: false,
    blogsRenderCount: null,
    blogsTopRenderCount: null,
    blogsTopBlockChunk: null,
    blogsLargeBlockChunk: null,
    blogsBottomBlockChunk: null,
    blogsAdditionalChunks: null,
    blogsShowLoadButton: false,
    blogsAdditionalChunksRendered: 0
  };
  
  export function blogsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BLOGS: {
        return {
          ...state,
          blogsReqest: true,
        };
      }
      case GET_BLOGS_SUCCESS: {
        return {
          ...state,
          blogsReqest: false,
          BlogsRequestFailed: false,
          blogs: action.blogs,
        };
      }
      case GET_BLOGS_FAILURE: {
        return {
          ...state,
          blogsReqest: false,
          blogsRequestFailed: true,
        };
      }
      case SET_BLOGS_RENDER_COUNT: {
        return {
          ...state,
          blogsRenderCount: action.renderCount,
        };
      }
      case SET_BLOGS_TOP_RENDER_COUNT: {
        return {
          ...state,
          blogsTopRenderCount: action.topRenderCount,
        };
      }
      case SET_BLOGS_DATA_CHUNKS: {
        return {
          ...state,
          blogsTopBlockChunk: action.topBlockChunk,
          blogsLargeBlockChunk: action.largeBlockChunk,
          blogsBottomBlockChunk: action.bottomBlockChunk,
          blogsAdditionalChunks: action.additionalChunks,
          blogsShowLoadButton: action.showLoadButton
        };
      }
      case RENDER_ADDITIONAL_BLOGS_CHUNKS: {
        return {
          ...state,
          blogsAdditionalChunksRendered: action.additionalChunksRendered
        };
      }
      default: {
        return state;
      }
    }
  }
  