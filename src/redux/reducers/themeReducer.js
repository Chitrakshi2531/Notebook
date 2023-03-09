import { actionTypes } from "../action-creators"; 

const initialTheme = {
  theme: 'light',
};

const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_THEME:
        return { ...state, theme: action.theme};
      default:
        return state;
    }   
};

export default themeReducer;