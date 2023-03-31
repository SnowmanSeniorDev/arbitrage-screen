import { useTheme } from 'styled-components'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import { IProps } from './types'
import { FC } from 'react'
import { CustomCard, DocumentHeader, SubText } from "./DocumentCard.styled";

export const DocumentCard: FC<IProps> = ({
	document,
	handleDocumentSelection
}) => {
	const theme = useTheme()

	const handleSelection = () => {
		handleDocumentSelection(document.data)
	}

	return (
		<CustomCard onClick={handleSelection}>
			<DocumentHeader>
				<BadgeOutlinedIcon sx={{ color: theme.palette.primary }} />
				<SubText>{document.label}</SubText>
			</DocumentHeader>
		</CustomCard>
	)
}
