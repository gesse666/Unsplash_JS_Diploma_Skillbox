const initialState = {
  code: "",
  error: null
};


export function unsplashReducer(  state = initialState,
  action) {
  switch (action.type) {
    case "CODE_SUCCESS":
      return {
      ...state,
      code: action.code

  }
  default:
    // ALWAYS have a default case in a reducer
    return state;
}}

