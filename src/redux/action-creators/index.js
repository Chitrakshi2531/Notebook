
const actionTypes = {
    CHANGE_THEME: 'CHANGE_THEME',
  };
 const action = {
    changeTheme: (theme) => ({
      type: actionTypes.CHANGE_THEME,
      payload: theme,
    })
};
export{actionTypes,action};