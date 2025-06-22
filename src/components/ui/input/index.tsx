import { TextField, type TextFieldProps } from '@mui/material';

const CustomInput = ({ ...props }: TextFieldProps) => {
    return <TextField {...props} />
}

export default CustomInput;