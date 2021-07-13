import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { tagFilterReducer } from './tagFilter';

export const rootReducer = combineReducers({
  tagFilter: tagFilterReducer,
  news: newsReducer
});