export const useLocalStorage = () => {
	const storeItem = (key: string, value: any) => {
		if (localStorage) {
			localStorage.setItem(key, value)
		}
	}

	const getItem = (key: string) => {
		if (localStorage) {
			let sessionKey = localStorage.getItem(key)
			if (sessionKey) {
				return JSON.parse(sessionKey)
			} else {
				return null
			}
		}
	}

	const deleteItem = (key: string) => {
		if (localStorage) {
			localStorage.removeItem(key)
		}
	}

	return {
		storeItem,
		getItem,
		deleteItem
	}
}
