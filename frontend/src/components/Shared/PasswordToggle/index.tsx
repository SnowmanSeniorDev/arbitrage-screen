import { IconButton, InputAdornment } from '@mui/material'
import { FC } from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { IProps } from './types'


export const PasswordToggle: FC<IProps> = ({ toggle, handleToggle }) => {
    const handleClick = () => {
        handleToggle(!toggle)
    }

    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
                edge="end"
                tabIndex={-1}
            >
                {toggle ? (
                    <VisibilityOffOutlinedIcon />
                ) : (
                    <RemoveRedEyeOutlinedIcon />
                )}
            </IconButton>
        </InputAdornment>
    )
}
