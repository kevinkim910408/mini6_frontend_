import api from '../../Shared/api'
import { getCookie } from '../../Shared/Cookie'

const LOAD_POST = 'post/LOAD_POST'
const LOAD_CATEGORY = 'post/LOAD_CATEGORY'
const ADD_POST = 'post/ADD_POST'
const UPDATE_POST = 'post/UPDATE_POST'
const DELETE_POST = 'post/DELETE_POST'
const DONE_POST = 'post/DONE_POST'

const LOAD_SOLVED = 'post/LOAD_SOLVED'
const LOAD_UNSOLVED = 'post/LOAD_UNSOLVED'
const ADD_LIKE = 'post/ADD_LIKE'

const GET_POST_REQUEST = 'post/GET_POST_REQUEST'
const GET_POST_ERROR = 'post/GET_POST_ERROR'

const loadPost = (payload) => ({type: LOAD_POST, payload})
const loadCategory = (payload) => ({type: LOAD_CATEGORY, payload})
const addPost = (payload) => ({type: ADD_POST, payload})
const updatePost = (payload) => ({type: UPDATE_POST, payload})
const deletePost = (payload) => ({type: DELETE_POST, payload})
const donePost = (payload) => ({type: DONE_POST, payload})
const loadSolved = (payload) => ({type: LOAD_SOLVED, payload})
const loadUnsolved = (payload) => ({type: LOAD_UNSOLVED, payload})
const addLike = (payload) => ({type: ADD_LIKE, payload})

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
    likes:0,
}

export const __loadPosts = () => async(dispatch, getState) => {
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const response = await api.get(`/api/articles`,{
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

export const __loadSolved = () => async(dispatch, getState) => {
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const response = await api.get(`/api/articles/solved`,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          })
          dispatch(loadSolved(response.data));
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __loadUnsolved = () => async(dispatch, getState) => {
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const response = await api.get(`/api/articles/unsolved`,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          })
          dispatch(loadUnsolved(response.data));
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}


export const __loadCategories = (payload) => async(dispatch, getState) => {
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const response = await api.get(`/api/articles/category/${payload.text}`,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          })
          dispatch(loadCategory(response.data));
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
        const data = await api.post('/api/article', {
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
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const request = await api.put(`/api/articles/${index}`, payload ,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          } );
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
        const msg = await api.delete(`/api/articles/${payload}`,{
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

export const __donePost = ({id}) => async (dispatch, getState) =>{
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const data = await api.patch(`/api/articles/${id}/done`, { }, {
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          });
        dispatch(donePost(data.data))
    }catch(error){
        alert(error)
    }finally{
        dispatch(getPostRequest(false))
    }
}

export const __addLike = ({id}) => async (dispatch, getState) =>{
    const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const request = await api.put(`/api/articles/${id}/like`, { } ,{
            headers: {
              'Authorization': `Bearer ${myToken}`,
            }
          });
        dispatch(addLike(request.data))
    }catch(error){
        alert(error)
    }finally{
        dispatch(getPostRequest(false))
    }
}

const postReducer = (state = initialState, {type, payload}) =>{
    console.log(payload)
    switch(type){
        case LOAD_POST:
            return{ ...state, list: payload}
        case LOAD_CATEGORY:
            return{ ...state, list: payload}
        case LOAD_SOLVED:
            return{ ...state, list: payload}
        case LOAD_UNSOLVED:
            return{ ...state, list: payload}
        case ADD_LIKE:
            return{ ...state, likes: payload}
        case ADD_POST:
            return {...state, list: [...state.list, payload]}
        case UPDATE_POST:
            const newChangePost = state.list.map((value) => {
                console.log(value.articleId, payload.articleId)
                return value.articleId === Number(payload.articleId) ? payload : value;
            });
            return { ...state, list: newChangePost };
        case DELETE_POST:
            const newDeletedPost = state.list.filter((value) => {
                return value.articleId !== Number(payload);
            });
            return { ...state, list: [...newDeletedPost] };
        case DONE_POST:
            const newData = state.list.map((value)=>{
                return value.articleId === Number(payload.articleId) ? payload : value;
            })
            return {...state, list: [...newData]};
        case GET_POST_REQUEST:
            return {...state, loading: payload }
        case GET_POST_ERROR:
            return {...state, error: payload }
        default:
            return state;
    }
}

export default postReducer;

