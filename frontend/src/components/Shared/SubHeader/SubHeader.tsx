import { FC } from 'react'
import { IProps } from './types'
import { Text } from "./SubHeader.styled"

export const SubHeader: FC<IProps> = ({ text }) => {
    return (
        <Text variant="h3">
            {text}
        </Text>
    )
}


