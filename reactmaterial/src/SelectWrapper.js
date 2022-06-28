import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

export const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    //Get the field that we want to change 'province' set it = field 
    const [field, meta] = useField(name);
    //Grab setFieldValue 
    const { setFieldValue } = useFormikContext();

    const handleChange = evt => {
        //Grab the value they selected from select
        const { value } = evt.target;
        //Setting the province = value they selected 
        setFieldValue(name, value);
    }
    const configureSelect = {

        ...field,
        ...otherProps,
        select: true,
        fullWidth: true,
        vertical: "bottom",
        onChange: handleChange,
    };
    return (<TextField {...configureSelect}>
        {Object.keys(options).map((item, pos) => {
            return (<MenuItem key={pos} value={item}>
                {options[item]}
            </MenuItem>);
        })}
    </TextField>
    );
}