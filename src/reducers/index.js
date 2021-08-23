import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import  tokenReducer  from './auth'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  auth: tokenReducer,

})
