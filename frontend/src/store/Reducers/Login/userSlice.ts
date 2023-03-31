import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserState, User } from '.'

const initialState: UserState = {}

export const userSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login: (state: UserState, action: PayloadAction<User>) => {
			return action.payload
				? { ...state, user: { ...action.payload } }
				: { ...state, user: action.payload }
		},
		logout: () => {
			return { user: undefined }
		},
	}
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
