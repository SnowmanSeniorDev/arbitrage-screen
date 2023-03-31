import { FC } from 'react';
import { VerifiedFooter } from '../VerifiedFooter/VerifiedFooter';
import { IProps } from './types';
import { Content, Wrapper } from './Card.styled';

export const Card:FC<IProps> = ({ children, fullScreen }) => (
	<Wrapper>
		<Content fullScreen={fullScreen}>
			{children}
			<VerifiedFooter />
		</Content>
	</Wrapper>
);
