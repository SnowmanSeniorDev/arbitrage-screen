export interface User {
	_id: string
	name: string
	email: string
}

export interface UserState {
	user?: User
}
