import { combineReducers } from "redux";
import userReducer from './users';
import postReducer from './posts';
import commentReducer from './comment'

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
})


export default rootReducer;