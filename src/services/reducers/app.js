import {TOGGLE_MOBILE_STATE, SET_WINDOW_SIZE, SET_ACTIVE_TAB} from '../actions/app';
const initialState = {
  isMobile: false,
  windowSize: {width: 1280, height: 800},
  activeTab: ''
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE_STATE: {
      return {
        ...state,
        isMobile: action.isMobile,
      };
    }
    case SET_WINDOW_SIZE : {
        return {
            ...state,
            windowSize: action.windowSize
        }
    }
    case SET_ACTIVE_TAB : {
      return {
          ...state,
          activeTab: action.tab
      }
  }
    default: {
      return state;
    }
  }
}
