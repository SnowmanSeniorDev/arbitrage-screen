import { useMemo } from 'react'

export const useHelpers = (password: string) => {
    const lengthCase = useMemo(
        () => password && password.length >= 8,
        [password]
    )

    const upperCase = useMemo(() => {
        const regex = /[A-Z]+/g
        return password && password.length > 0 && regex.test(password)
    }, [password])

    const lowerCase = useMemo(() => {
        const regex = /[a-z]+/g
        return password && password.length > 0 && regex.test(password)
    }, [password])

    const numberCase = useMemo(() => {
        const regex = /[0-9]+/g
        return password && password.length > 0 && regex.test(password)
    }, [password])

    const specialCharacterCase = useMemo(() => {
        const regex = /[!”#$%&'()*+,-.:;<=>?@_`{}~]+/g
        return password && password.length > 0 && regex.test(password)
    }, [password])

    return {
        upperCase,
        lowerCase,
        numberCase,
        lengthCase,
        specialCharacterCase
    }
}
