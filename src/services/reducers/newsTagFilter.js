import {
  SET_SELECTED_NEWS_TAG,
  GET_NEWS_TAGS,
  GET_NEWS_TAGS_SUCCESS,
  GET_NEWS_TAGS_FAILURE,
} from '../actions/newsTagFilter';

const initialState = {
  currentNewsFilter: 'Все',
  tagsRequest: false,
  tagsRequestFailed: false,
  categories: [
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

export const newsTagFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_NEWS_TAG: {
      return {
        ...state,
        currentNewsFilter: action.filter,
      };
    }
    case GET_NEWS_TAGS: {
      return {
        ...state,
        tagsRequest: true,
      };
    }
    case GET_NEWS_TAGS_SUCCESS: {
      return {
        ...state,
        tagsRequest: false,
        tagsRequestFailed: false,
        categories: action.categories,
      };
    }
    case GET_NEWS_TAGS_FAILURE: {
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
