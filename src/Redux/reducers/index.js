import {combineReducers} from 'redux';
import isLoginReducer from './isLogin';
import dialogImageReducer from './dialogImage';

const allReducer = combineReducers({
  dialogImage: dialogImageReducer,
  isLogin: isLoginReducer
});

export default allReducer;