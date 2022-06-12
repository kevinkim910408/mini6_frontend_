import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie } from "../../shared/Cookie";

// 액션

const LOG_IN = "LOG_IN";
const LOAD_TOKEN = "LOAD_TOKEN";
const WITHDRAWAL = "WITHDRAWAL";

// 초기값

const initialState = {
  userInfo: {
    username: "",
    userPw: "",
  },
  is_login: false,
};

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user) => ({ user }));
const loadToken = createAction(LOAD_TOKEN, (token) => ({ token }));
const withdrawal = createAction(WITHDRAWAL, (user) => ({ user }));

// 미들웨어

// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

// 로그인 액션
const loginDB = (username, password) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5001/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.config.data.split(":"));
        console.log(response.headers);

        dispatch(
          logIn({
            is_login: true,
          })
        );
        setCookie(
          "Authorization",
          response.headers.authorization.split(" ")[1]
        );
        setCookie("username", username);
      })
      .catch((error) => {
        window.alert("아이디 또는 비밀번호를 확인해주세요.");
        console.log("Login Error", error);
      });
  };
};

// 회원가입 액션
const signupDB = (username, password, passwordcheck, profilePic) => {
  return function () {
    axios
      .post("http://localhost:5001/signup", {
        username,
        password,
        passwordcheck,
        profilePic,
      })
      .then((response) => {
        console.log(response);
        window.alert("회원가입을 축하합니다!");
      })
      .catch((error) => {
        alert("중복된 아이디가 존재합니다.");
        console.log("회원가입 DB Error", error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.token = action.payload.user.token;
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  withdrawal,
  loginDB,
  signupDB,
  loadTokenFB,
};

export { actionCreators };