import { actionTypes } from "../action-creators"; 

const initialColor = {
  color: 'blue'
};

const colorReducer = (state = initialColor, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_COLOR:
        return { ...state, color: action.color};
      default:
        return state;
    }   
};

export default colorReducer;