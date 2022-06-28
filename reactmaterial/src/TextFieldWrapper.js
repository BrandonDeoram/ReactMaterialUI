import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
export const TextfieldWrapper = ({
    name,
    ...otherProps
}) => {
    //Makes formik aware of this component
    //Any changes made will update formik
    const [field, meta] = useField(name);
    //Default configs for those objects
    const configTextField = {
        fullWidth: true,
        ...field,
        ...otherProps,
        required:true,
        variant: 'outlined',
    };

    return (<TextField {...configTextField} />);
}