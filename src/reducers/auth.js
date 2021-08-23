


import {
    CODE_REQUEST

  } from '../actions/AuthAction'

import {
FETCH_TOKEN_BEGIN,
FETCH_TOKEN_SUCCESS,
FETCH_TOKEN_FAILURE,
FETCH_PHOTOS_SUCCESS

} from "../actions/AuthAction";
  
  
//   export function authReducer(state = initialState, action) {
//     switch (action.type) {
//       case CODE_REQUEST:
//         return { ...state, code: action.payload}

  
//       default:
//         return state
//     }
//   }



const initialState = {
token: '',
loading: false,
error: null,
photos:null,
};

export default function tokenReducer(
state = initialState,
action
) {
switch (action.type) {
    case FETCH_TOKEN_BEGIN:
    return {
        ...state,
        loading: true,
        error: null
    };

    case FETCH_TOKEN_SUCCESS:
    return {
        ...state,
        loading: false,
        token: action.payload
    };

    case FETCH_TOKEN_FAILURE:
    return {
        ...state,
        loading: false,
        error: action.payload
    };

    case FETCH_PHOTOS_SUCCESS:
        return {
            ...state,
            photos: action.payload
        };


    default:
    // ALWAYS have a default case in a reducer
    return state;
}
}

