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

export const __loadPosts = () => async(dispatch, getState) => {
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const response = await api.get(`api/articles`,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          })
          dispatch(loadPost(response.data));
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __addPost = (payload) => async (dispatch, getState) =>{
    const myToken = getCookie("Authorization");
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
    console.log(payload, index)
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const request = await api.put(`api/articles/${index}`, payload ,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          } );
        console.log(request)
        dispatch(updatePost(request.data))
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __deletePost = (payload) => async (dispatch, getState) => {
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const msg = await api.delete(`api/articles/${payload}`,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          });
          alert(msg.data)
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
                return value.articleId === Number(payload.articleId) ? payload : value;
            });
            return { ...state, list: newChangePost };
        case DELETE_POST:
            const newDeletedPost = state.list.filter((value) => {
                return value.articleId !== Number(payload);
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

