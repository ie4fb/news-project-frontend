import {
  SET_SELECTED_BLOGS_TAG,
  GET_BLOGS_TAGS,
  GET_BLOGS_TAGS_SUCCESS,
  GET_BLOGS_TAGS_FAILURE,
} from '../actions/blogsTagFilter';

const initialState = {
  currentBlogFilter: 'Все',
  tagsRequest: false,
  tagsRequestFailed: false,
  blogsCategories: [
    'Политика',
    'Общество',
    'Бизнес',
    'Экономика',
    'Происшествия',
    'Мир',
    'Инвестировать',
    'Телекоммуникации',
    'Финансы. Рынок',
    'Занять',
    'В городе',
    'Культура',
    'Спорт',
  ],
};

export const blogsTagFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_BLOGS_TAG: {
      return {
        ...state,
        currentBlogFilter: action.filter,
      };
    }
    case GET_BLOGS_TAGS: {
      return {
        ...state,
        tagsRequest: true,
      };
    }
    case GET_BLOGS_TAGS_SUCCESS: {
      return {
        ...state,
        tagsRequest: false,
        tagsRequestFailed: false,
        blogsCategories: action.blogsCategories,
      };
    }
    case GET_BLOGS_TAGS_FAILURE: {
      return {
        ...state,
        tagsRequest: false,
        tagsRequestFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
