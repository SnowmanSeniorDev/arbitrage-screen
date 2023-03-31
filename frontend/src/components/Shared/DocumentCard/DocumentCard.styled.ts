import styled from "styled-components";
import { Card, Typography } from '@mui/material'

export const CustomCard = styled(Card)`
	cursor: pointer;
	padding: 16px;
	width: 100%;
	box-shadow: none;
	border: 1px solid ${({ theme }) => theme.palette.input};
`

export const DocumentHeader = styled.div`
	display: flex;
	column-gap: 16px;
	align-items: center;
`

export const SubText = styled(Typography)``
