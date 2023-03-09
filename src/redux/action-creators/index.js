
const actionTypes = {
    CHANGE_THEME: 'CHANGE_THEME',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
  };
 const action = {
    changeTheme: (theme) => ({
      type: actionTypes.CHANGE_THEME,
      payload: theme,
    }),
    login: () => ({
      type: actionTypes.LOGIN,
    }),
    logout: () => ({
      type: actionTypes.LOGOUT,
    }),
};
export{actionTypes,action};