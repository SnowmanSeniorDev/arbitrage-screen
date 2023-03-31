import styled from 'styled-components'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Typography } from '@mui/material'

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const List = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 8px;
`

export const ListItem = styled.div`
	display: flex;
	column-gap: 8px;
`

export const CheckIcon = styled(CheckCircleOutlineIcon)`
	color: ${(props) => props.theme.palette.success};
	font-size: 14px;
`

export const ErrorIcon = styled(ErrorOutlineIcon)`
	color: ${(props) => props.theme.status.success};
	font-size: 14px;
`

export const Text = styled(Typography)`
	color: ${(props) => props.theme.typography.input};
	font-weight: 500;
`
