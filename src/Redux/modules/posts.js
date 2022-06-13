import api from '../../Shared/api'
import { getCookie } from '../../Shared/Cookie'

const LOAD_POST = 'post/LOAD_POST'
const ADD_POST = 'post/ADD_POST'
const UPDATE_POST = 'post/UPDATE_POST'
const DELETE_POST = 'post/DELETE_POST'
const DONE_POST = 'post/DONE_POST'

const GET_POST_REQUEST = 'post/GET_POST_REQUEST'
const GET_POST_ERROR = 'post/GET_POST_ERROR'

const loadPost = (payload) => ({type: LOAD_POST, payload})
const addPost = (payload) => ({type: ADD_POST, payload})
const updatePost = (payload) => ({type: UPDATE_POST, payload})
const deletePost = (payload) => ({type: DELETE_POST, payload})
const donePost = (payload) => ({type: DONE_POST, payload})

const getPostRequest = (payload) => ({type: GET_POST_REQUEST, payload})
const getPostError = (payload) => ({type: GET_POST_ERROR, payload})

const initialState = {
    list: [],
    post: {
        id:0,
        title:"",
        content: "",
    },
    loading: false,
    error: null,
}

export const __loadPosts = (page) => async(dispatch, getState) => {
    dispatch(getPostRequest(true))
    try{
        const response = await api.get(`api/articles/page/${page}`)
        // dispatch(loadPost(response.data));
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __addPost = (payload) => async (dispatch, getState) =>{
    const myToken = getCookie("Authorization");
    console.log(myToken);
    dispatch(getPostRequest(true))
    try{
        const data = await api.post('api/article', {
            title: payload.title,
            category: payload.category,
            content: payload.content,
            done: payload.done,
        },{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          });
          dispatch(addPost(data.data))
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __updatePost = (payload, index) => async (dispatch, getState) =>{
    dispatch(getPostRequest(true))
    try{
        const request = await api.put(`api/articles/${index}`, payload );
        console.log(request)
        dispatch(updatePost(request.data))
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __deletePost = (payload) => async (dispatch, getState) => {
    dispatch(getPostRequest(true))
    try{
        // response에서 id값을 받아야합니다.
        const response = await api.delete(`api/articles/${payload}`);
        dispatch(deletePost(payload));
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __donePost = (payload, id) => async (dispatch, getState) =>{
    console.log(payload)
    dispatch(getPostRequest(true))
    try{
        // id, true/false -> response: 
        const request = await api.put(`/posts/${Number(id)}`, payload );
        dispatch(donePost(request.data))
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

const postReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case LOAD_POST:
            return{ ...state, list: payload}
        case ADD_POST:
            return {...state, list: [...state.list, payload]}
        case UPDATE_POST:
            const newChangePost = state.list.map((value) => {
                return value.id === Number(payload.id) ? payload : value;
            });
            return { ...state, list: newChangePost };
        case DELETE_POST:
            const newDeletedPost = state.list.filter((value) => {
                return value.id !== Number(payload);
            });
            return { ...state, list: [...newDeletedPost] };
        case GET_POST_REQUEST:
            return {...state, loading: payload }
        case GET_POST_ERROR:
            return {...state, error: payload }
        default:
            return state;
    }
}

export default postReducer;

