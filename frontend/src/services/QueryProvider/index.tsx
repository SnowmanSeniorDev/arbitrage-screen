import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import { IProps } from '../SharedTypes'

const QueryProvider: FC<IProps> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}

export default QueryProvider
