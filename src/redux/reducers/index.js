import { combineReducers } from "redux";   
import { actionTypes } from "../action-creators"; 
const initialTheme = {
  theme: 'dark',
};
const initialStatus = {
  login: false,
};
const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_THEME:
        return { ...state, theme: action.payload };
      default:
        return state;
    }   
};
const loginReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { login : true};
    case actionTypes.LOGOUT:
      return { login : false};
    default:
      return state;
  }   
};
export default combineReducers({login : loginReducer, theme : themeReducer}) ;