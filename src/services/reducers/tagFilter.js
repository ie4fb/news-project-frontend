import { SET_SELECTED_TAG, UPDATE_CATEGORIES_LIST } from '../actions/tagFilter';

const initialState = {
  currentFilter: 'all',
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
    case UPDATE_CATEGORIES_LIST: {
      return {
        ...state,
        categories: action.categories,
      };
    }
    default: {
      return state;
    }
  }
};
