import { SET_SELECTED_TAG, GET_TAGS, GET_TAGS_SUCCESS, GET_TAGS_FAILURE } from '../actions/tagFilter';

const initialState = {
  currentFilter: 'Все',
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
  ]
};

export const tagFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TAG: {
      return {
        ...state,
        currentFilter: action.filter,
      };
    }
    case GET_TAGS: {
      return {
        ...state,
        tagsRequest: true,
      };
    }
    case GET_TAGS_SUCCESS: {
      return {
        ...state,
        tagsRequest: false,
        tagsRequestFailed: false,
        categories: action.categories
      };
    }
    case GET_TAGS_FAILURE: {
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
