import { useQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGraphqlClient } from '../../Context/GraphqlContext'
import { useSession } from '../useSession'
import { LOGIN } from './query'
import { IVariables, IResponse, IError } from './types'
import { login as loginAction } from '../../store/Reducers/Login'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const useLogin = () => {
	const initialValue = {
		email: '',
		password: ''
	}
	const [errors, setErrors] = useState<IError | null>(null)
	let [variables, setVariables] = useState<IVariables | null>(initialValue)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const { startSession } = useSession()
	const { b2cClient } = useGraphqlClient()

	const fetchSignin = async () => {
		return await b2cClient?.request(LOGIN, variables)
	}

	const { refetch, isFetching, isRefetchError, data } = useQuery<
		IResponse,
		IError
	>({
		queryKey: ['login', variables],
		queryFn: fetchSignin,
		enabled: false,
		onError: (error: IError) => {
			setErrors(error)
		},
		cacheTime: 0
	})

	if (data) {
		startSession(
			data.login.token.access_token,
			data.login.access_grant,
			data.login.user._id
		)
		b2cClient?.setHeader(
			'Authorization',
			`Bearer ${data.login.token.access_token}`
		)
		let next = searchParams.get('next');
		let companyId = searchParams.get('company_id');
		next = next ?? `/verify?company_id=${companyId}`;
		dispatch(loginAction(data.login.user))

		if(!next){
			next = '/select-country-and-document-type';
		}
		navigate(next);
	}

	const setQueryParams = useCallback(({ email, password }: IVariables) => {
		setVariables({ email, password })
	}, [])

	return {
		login: refetch,
		data,
		isRefetchError,
		setQueryParams,
		loading: isFetching,
		error: errors,
		email: variables?.email
	}
}
