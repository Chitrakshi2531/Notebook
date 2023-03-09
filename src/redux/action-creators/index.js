
const actionTypes = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 8f0788833665d4733503c7eea7e1fac22b1dc410
};
export{actionTypes,action};