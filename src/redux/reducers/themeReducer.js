import { actionTypes } from "../action-creators"; 

const initialTheme = {
  theme: 'dark',
};

const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_THEME:
        return { ...state, theme: action.payload };
      default:
        return state;
    }   
};

export default themeReducer;