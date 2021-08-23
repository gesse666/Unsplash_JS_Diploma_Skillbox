import { createApi } from "unsplash-js";

export const TOKEN_REQUEST = 'TOKEN_REQUEST'

export const FETCH_TOKEN_BEGIN = "FETCH_TOKEN_BEGIN";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE";

export const FETCH_PHOTOS_SUCCESS ="FETCH_PHOTOS_SUCCESS"

export const fetchTokenBegin = () => ({
  type: FETCH_TOKEN_BEGIN
});

// export const fetchTokenSuccess = (token) => ({
//   type: FETCH_TOKEN_SUCCESS,
//   payload: token 
// });

export const fetchTokenFailure = (error) => ({
  type: FETCH_TOKEN_FAILURE,
  payload: error
});

let code = window.location.search.split("code=")[1];

export function fetchCode(url) {
    return (dispatch) => {
      window.location.assign(url);
    };
  }

export  function GetToken() {
    return async (dispatch) => {
        dispatch(fetchTokenBegin());
        try {
            const res = await fetch("https://unsplash.com/oauth/token", {
            method: "POST",
            body: JSON.stringify({
                grant_type: "authorization_code",
                client_id: "Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M",
                client_secret: "eFs7wRL5f4iZIl82XS_F6JnmtoH3QoqqNz4BnirYlJk",
                redirect_uri: "http://localhost:3000/auth",
                code: code
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            });
            const data =  await res.json();
            // dispatch(fetchTokenSuccess(data.access_token));
            const token = data.access_token
            dispatch({
                type: FETCH_TOKEN_SUCCESS,
                payload: token,
              })
            
            // return data;
            console.log(data.access_token);
            localStorage.setItem("Authorization", "Bearer " + data.access_token);
            return data.access_token;
        } catch (err) {
            console.error(err);
            dispatch(fetchTokenFailure(err));
        }
    }
}


export  function getPhotos(token) {
  return (dispatch) => {
  const api = createApi({
  accessKey:   `Bearer ${token}`
  })
  api.search
  .getPhotos({ query: "cat", orientation: "landscape", orderBy:"latest" })
  .then(result => {
      // setPhotosResponse(result);
      console.log(result.response.results)
      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        payload: result.response.results,
      })
  })
  .catch(() => {
      console.log("something went wrong!")
  })
}}
