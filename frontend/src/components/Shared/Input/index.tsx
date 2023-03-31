import { OutlinedInputProps, TextField, TextFieldProps } from '@mui/material'
import styled from 'styled-components'

export const Input = styled((props: TextFieldProps) => (
    <TextField
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme, error }) => ({
    backgroundColor: theme.palette.input,
    color: theme.typography.input,
    borderRadius: '8px',
    '& .MuiFilledInput-root': {
        border: `1px solid ${error ? theme.palette.error : '#E2E1DE'}`,
        overflow: 'hidden',
        borderRadius: 8,
        underline: 0,
        '&.Mui-focused': {
            border: `1px solid ${
                error ? theme.palette.error : 'rgba(5,11,20,0.95)'
            }`,
            color: `${theme.typography.input} !important`,
            underline: 0
        },
        '&::before': {
            border: 0
        },
        '&::after': {
            border: 0
        },
        '&:hover::before': {
            border: 0
        }
    },
    '& .MuiInputAdornment-filled': {
        border: 'none'
    },
    '& .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: error ? theme.palette.error : 'rgba(5,11,20,0.95)'
        }
    }
}))
