export const fetchCodeSuccess = (code) =>({
  type: "CODE_SUCCESS", 
  payload: code
})


export const fetchCodeError = (error) =>({
  type: "CODE_ERROR", 
  payload: {error}
})



export function fetchCode(url) {
  return (dispatch) => {
    window.location.assign(url);
    const code = window.location.search.split("code=")[1];
    if (!code) {
      dispatch(fetchCodeError)}
    {dispatch(fetchCodeSuccess(code));
    }
    alert ("dd")
    // debugger;
  };
}
