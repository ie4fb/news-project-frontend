import { combineReducers } from "redux";
import { newsReducer } from "./news";
import { tagFilterReducer } from "./tagFilter";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  tagFilter: tagFilterReducer,
  news: newsReducer,
  login: loginReducer,
});
