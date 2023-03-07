import { combineReducers } from "redux";   
import { actionTypes } from "../action-creators"; 
const initialState = {
    theme: 'light',
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_THEME:
        return { ...state, theme: action.payload };
      default:
        return state;
    }   
};
export default reducer ;