import styled from 'styled-components';
import Dropdown from './Dropdown';
import { DAY_DROPDOWN_OPTIONS, TIME_DROPDOWN_OPTIONS } from '../../utils/utlis';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const HTMLForm = styled.form`
width:100%;
`;

const Form = () => {
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [dayValue, setDayValue] = useState('');
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startValue >= endValue) {
            setMessage("Start time cannot come before end time.")
            return
        }
    }

    useEffect(() => {
        if (dayValue === '' || startValue === '' || endValue === '') {
            setIsSubmitDisabled(true);
        } else {
            setIsSubmitDisabled(false);
        }
    }, [dayValue, startValue, endValue]);

    return (
        <HTMLForm onSubmit={handleSubmit}>
            <Dropdown label="Day" selection={DAY_DROPDOWN_OPTIONS} value={dayValue} setValue={setDayValue} />
            <Dropdown label="Start time" selection={TIME_DROPDOWN_OPTIONS} value={startValue} setValue={setStartValue} />
            <Dropdown label="End time" selection={TIME_DROPDOWN_OPTIONS} value={endValue} setValue={setEndValue} />
            {message &&
                <Typography id="form-warning-message" variant='subtitle2' >
                    {message}
                </Typography>}
            <Button type='submit' disabled={isSubmitDisabled}>{isSubmitDisabled ? "Please fill all fields" : "Add Availability"}</Button>
        </HTMLForm>
    )
}

export default Form;