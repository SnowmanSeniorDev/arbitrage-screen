import { useMutation } from '@tanstack/react-query'
import { useGraphqlClient } from '../../Context/GraphqlContext'
import { SIGNUP } from './query'
import { IVariables, IResponse, IError } from './types'

export const useSignup = ()=>{
	const { b2cClient } = useGraphqlClient();
	const {data, isLoading, error, reset, mutate} = useMutation<IResponse, IError ,IVariables, unknown>(async (variables: IVariables)=>{
		return await b2cClient?.request(SIGNUP, variables)
	});
	return {signup: mutate, data,loading: isLoading, error, reset};
}
