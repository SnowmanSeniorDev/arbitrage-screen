import { FC } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import { IProps } from './types'
import { SubHeader } from '../Shared/SubHeader/SubHeader'
import { Content, SubText } from './Loading.styled'

export const Loading: FC<IProps> = ({ header, subText }) => {
    const theme = useTheme()

    return (
        <Content>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="1"
                animationDuration="1"
                width="50"
                visible={true}
            />
            {header ? <SubHeader text={header} /> : null}
            <SubText variant="body2">
                {subText ? subText : 'This might take a moment'}
            </SubText>
        </Content>
    )
}
