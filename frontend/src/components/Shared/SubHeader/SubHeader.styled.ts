import styled from 'styled-components'
import { Typography } from '@mui/material'

export const Text = styled(Typography)`
	font-size: 24px;
	font-weight: 600;
	color: ${(props) => props.theme.typography.input};
`
