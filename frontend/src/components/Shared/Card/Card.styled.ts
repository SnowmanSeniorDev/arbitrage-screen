import styled from 'styled-components'
import { CSSProps } from './types'

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: inherit;
`

export const Content = styled.div<CSSProps>`
	position: relative;
	width: ${(props) => (props.fullScreen ? '100%' : '375px')};
	background: #fff;
	border-radius: 32px;
	padding: 32px 24px;
	display: flex;
	flex-direction: column;
	row-gap: 32px;
	align-items: center;
	justify-content: space-between;
	min-height: ${(props) => (props.fullScreen ? 'inherit' : 'auto')};
	@media (max-width: 600px) {
		flex-grow: 1;
		min-height: inherit;
	}
`
