import { loginRequest, checkRequest } from "../../utils/api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const CHECK_REQUEST = "CHECK_REQUEST";
export const CHECK_SUCCESS = "CHECK_SUCCESS";
export const CHECK_FAILED = "CHECK_FAILED";

export function login(data) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    loginRequest(data)
      .then(() => {
        dispatch({
          type: LOGIN_SUCCESS,
        });
        // const history = useHistory();
        // history.push("/admin");
      })
      .catch((err) => {
        // const { setErrors } = useFormWithValidation();
        // if (typeof err === "object") {
        //   setErrors({ submit: "Ошибка сервера" });
        // } else {
        //   setErrors({ submit: err });
        // }
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
}

export function checkCookies() {
  return function (dispatch) {
    dispatch({
      type: CHECK_REQUEST,
    });
    checkRequest()
      .then(() => {
        dispatch({
          type: CHECK_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: CHECK_FAILED,
        });
      });
  };
}
