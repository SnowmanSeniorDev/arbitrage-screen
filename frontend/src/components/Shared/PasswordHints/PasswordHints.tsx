import { FC } from 'react';
import { IProps } from './types';
import { useHelpers } from './useHelpers';
import { CheckIcon, Content, ErrorIcon, List, ListItem, Text } from './PasswordHints.styled';

export const PasswordHints: FC<IProps> = ({ password }) => {
	const {
		upperCase,
		lowerCase,
		numberCase,
		lengthCase,
		specialCharacterCase
	} = useHelpers(password)
	return (
		<Content>
			<Text variant="body2">Password must contain:</Text>
			<List>
				<ListItem>
					{lengthCase ? <CheckIcon /> : <ErrorIcon />}
					<Text variant="caption">
						At least 8 characters (12+ recommended).
					</Text>
				</ListItem>
				<ListItem>
					{upperCase ? <CheckIcon /> : <ErrorIcon />}
					<Text variant="caption">
						At least one uppercase letter.
					</Text>
				</ListItem>
				<ListItem>
					{lowerCase ? <CheckIcon /> : <ErrorIcon />}
					<Text variant="caption">
						At least one lowercase letter.
					</Text>
				</ListItem>
				<ListItem>
					{numberCase ? <CheckIcon /> : <ErrorIcon />}
					<Text variant="caption">At least one number.</Text>
				</ListItem>
				<ListItem>
					{specialCharacterCase ? <CheckIcon /> : <ErrorIcon />}
					<Text variant="caption">
						At least one special character.
					</Text>
				</ListItem>
			</List>
	</Content>
  );
};
