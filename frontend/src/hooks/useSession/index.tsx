export const useSession = () => {
	const storeSessionItem = (key: string, value: any) => {
		if (sessionStorage) {
			sessionStorage.setItem(key, value)
		}
	}

	const getSessionItem = (key: string) => {
		if (sessionStorage) {
			let sessionKey = sessionStorage.getItem(key)
			if (sessionKey) {
				return JSON.parse(sessionKey)
			} else {
				return null
			}
		}
	}

	const closeSession = () => {
		sessionStorage.clear()
	}

	const startSession = (
		authToken: string,
		accessGrant: string,
		userId: string
	) => {
		storeSessionItem('TOGGGLE_AUTH_TOKEN', JSON.stringify(authToken))
		storeSessionItem('TOGGGLE_ACCESS_GRANT', JSON.stringify(accessGrant))
		storeSessionItem('TOGGGLE_USER_ID', JSON.stringify(userId))
	}

	return {
		storeSessionItem,
		getSessionItem,
		closeSession,
		startSession
	}
}
