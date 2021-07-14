import {TOGGLE_MOBILE_STATE, SET_WINDOW_SIZE} from '../actions/app';
const initialState = {
  isMobile: false,
  windowSize: {width: 1280, height: 800}
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
    default: {
      return state;
    }
  }
}
