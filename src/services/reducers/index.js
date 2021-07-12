import { combineReducers } from 'redux';
import { tagFilterReducer } from './tagFilter';

export const rootReducer = combineReducers({
  tagFilter: tagFilterReducer,
});