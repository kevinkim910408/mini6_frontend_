import api from "../../Shared/api";
import { getCookie } from "../../Shared/Cookie";

// actiontype
const LOAD_COMMENT = "comment/LOAD_COMMENT";
const ADD_COMMENT = "comment/ADD_COMMENT";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

//action함수
const loadComment = (payload) => ({ type: LOAD_COMMENT, payload });
const addComment = (payload) => ({ type: ADD_COMMENT, payload });
const updateComment = (payload) => ({ type: UPDATE_COMMENT, payload });
const deleteComment = (payload) => ({ type: DELETE_COMMENT, payload });

//초기값
const initialState = {
  comment: [],
};

//thunk
export const __loadComment = (articleId) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  const response = await api.get(`/api/articles/${articleId}/comments`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  dispatch(loadComment(response.data));
};

export const __addComment =
  (payload, articleId) => async (dispatch, getState) => {
    const myToken = getCookie("Authorization");

    const data = await api.post(
      `/api/articles/${articleId}/comments`,
      {
        comment: payload.comment,
      },
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    dispatch(__addComment(data.data));
  };

export const __updateComment =
  (payload, commentId) => async (dispatch, getState) => {
    const myToken = getCookie("Authorization");
    const request = await api.put(
      `
        /api/articles/comments/${commentId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    dispatch(updateComment(request.data));
  };
export const __deleteComment =
  (payload, commentId) => async (dispatch, getState) => {
    const myToken = getCookie("Authorization");
    const msg = await api.delete(`/api/articles/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });
    alert(msg.data);
    dispatch(deleteComment(payload));
  };

//reducer
const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_COMMENT:
      return { ...state, comment: payload };
    case ADD_COMMENT:
      return { ...state, comment: [...state.comment, payload] };
    case UPDATE_COMMENT:
      const newChangeComment = state.comment.map((value) => {
        console.log(value.commentId, payload.commentId);
        return value.commentId === Number(payload.commentId) ? payload : value;
      });
      return { ...state, comment: newChangeComment };
    case DELETE_COMMENT:
      const newDeletedComment = state.comment.filter((value) => {
        return value.commentId !== Number(payload);
      });
      return { ...state, list: [...newDeletedComment] };
    default:
      return state;
  }
};
export default commentReducer;
