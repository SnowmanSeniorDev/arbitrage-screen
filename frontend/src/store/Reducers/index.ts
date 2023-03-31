import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './Login'

export const rootReducer = combineReducers({
	user: userReducer
})
