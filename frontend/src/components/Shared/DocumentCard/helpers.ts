export type key = 'idCard' | 'drivingLicense' | 'passport'
type docsMap = {[id in key]: string};
export const DOCS: docsMap = {
	idCard: 'ID Card',
	drivingLicense: 'Driving License',
	passport: 'Passport'
}
