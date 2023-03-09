import { actionTypes } from "../action-creators"; 

const initialStatus = {
  login: false,
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

export default loginReducer;