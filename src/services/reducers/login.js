import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CHECK_REQUEST,
  CHECK_SUCCESS,
  CHECK_FAILED,
} from "../actions/login";

const initialState = {
  isLoggedIn: false,
  isUserLoaded: false,
  loginRequest: false,
  loginFailed: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loginFailed: false,
        loginRequest: false,
      };
    }
    case LOGIN_FAILED: {
      return { ...state, loginFailed: true, loginRequest: false };
    }
    case CHECK_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case CHECK_SUCCESS: {
      return {
        ...state,
        isUserLoaded: true,
        isLoggedIn: true,
        loginFailed: false,
        loginRequest: false,
      };
    }
    case CHECK_FAILED: {
      return {
        ...state,
        isUserLoaded: true,
        loginFailed: true,
        loginRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
