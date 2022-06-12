import { combineReducers } from "redux";
import wordsReducer from './users';
import postReducer from './posts';

const rootReducer = combineReducers({
    wordsReducer,
    postReducer,
})


export default rootReducer;