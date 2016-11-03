module.exports = (state = {}, action = {}) => {
  if(action.type === '@navigation/change'){
    return { currentComponent: action.component };
  }

  return state;
}
