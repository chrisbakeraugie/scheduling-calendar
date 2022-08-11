import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';

const BoxSx = {
    margin: "15px"
}

const Dropdown = ({ label, selection, value, setValue }) => {
    const dropdownOptions = useMemo(() => selection(), []);

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <Box sx={BoxSx}>
            <FormControl fullWidth>
                <InputLabel id={label + "-label-id"}>{label}</InputLabel>
                <Select
                    labelId={label + "-label-id"}
                    id={label + "dropdwon-select"}
                    value={value}
                    label={label}
                    onChange={handleChange}
                    MenuProps={{ style: { maxHeight: "400px" } }}
                    required
                >
                    {dropdownOptions.map((select, index) => <MenuItem key={label + "-option-" + index} value={select.value}>{select.label}</MenuItem>)}
                </Select>
            </FormControl>
        </Box >
    )
}

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    selection: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Dropdown;