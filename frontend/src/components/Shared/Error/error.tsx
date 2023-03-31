import { Result } from '../Result/Result'
import ErrorTwoTone from '@mui/icons-material/ErrorTwoTone'
import styled from 'styled-components'
import { Arrangment } from '../Result/types'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
	const navigate = useNavigate()

	return (
		<Result
			SVGIcon={Icon}
			header="Verification unsuccessful"
			subtext="Unfortunately you have not passed the identity verification"
			button={{
				text: 'Try again',
				arrangment: 'column' as Arrangment,
				callback: () => navigate('/select-country-and-document-type')
			}}
		/>
	)
}

const Icon = styled(ErrorTwoTone)`
	color: ${(props) => props.theme.palette.error};
`
