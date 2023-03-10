
const actionTypes = {
  CHANGE_THEME: 'CHANGE_THEME',
  CHANGE_COLOR: 'CHANGE_COLOR',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};
const action = {
  changeTheme: (theme) => ({
    type: actionTypes.CHANGE_THEME,
    theme: theme,
  }),
  changeColor: (color) => ({
    type: actionTypes.CHANGE_COLOR,
    color: color,
  }),
  login: () => ({
    type: actionTypes.LOGIN,
  }),
  logout: () => ({
    type: actionTypes.LOGOUT,
  }),
};
export{actionTypes,action};