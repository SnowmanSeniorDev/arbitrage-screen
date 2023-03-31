import {
	IDocumentData,
	IDropdownData
} from '../../SelectCountryAndDocumentType/types'

export interface IProps {
	document: IDropdownData
	handleDocumentSelection: (doc: IDocumentData) => void
}
