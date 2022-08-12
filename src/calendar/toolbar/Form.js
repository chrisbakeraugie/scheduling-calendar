import styled from 'styled-components';
import Dropdown from './Dropdown';
import { DAY_DROPDOWN_OPTIONS, TIME_DROPDOWN_OPTIONS } from '../../utils/utlis';
import { Button, Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { AvailabilityContext } from '../../App';

const HTMLForm = styled.form`
width:100%;
`;

const Form = () => {
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [dayValue, setDayValue] = useState('');
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const [message, setMessage] = useState();
    const context = useContext(AvailabilityContext);

    const updateAvailability = () => {
        let start = startValue;
        let end = endValue;
        const dayAvailability = context.state.filter((block) => block.day === dayValue);
        for (let i = dayAvailability.length - 1; i >= 0; i--) {
            const startIsBetween = (dayAvailability[i].start <= start) && (dayAvailability[i].end >= start);
            const endIsBetween = (dayAvailability[i].start <= end) && (dayAvailability[i].end >= end);
            const newCoversOld = (dayAvailability[i].start >= start) && (dayAvailability[i].end <= end);
            const oldCoversNew = (dayAvailability[i].start <= start) && (dayAvailability[i].end >= end);

            if (oldCoversNew) {
                setMessage("This time is already marked \"Available\"");
                return
            } else if (newCoversOld) {
                dayAvailability.splice(i, 1,);
            } else if (startIsBetween) {
                start = dayAvailability[i].start;
                dayAvailability.splice(i, 1);
            } else if (endIsBetween) {
                end = dayAvailability[i].end;
                dayAvailability.splice(i, 1);
            }
        }
        context.setState((prevState) => {
            let newState = context.state.filter((block) => block.day !== dayValue);
            if (dayAvailability.length > 0) {
                newState.push(...dayAvailability, {
                    day: dayValue,
                    start: start,
                    end: end
                })
            } else {
                newState.push({
                    day: dayValue,
                    start: start,
                    end: end
                })
            }
            return newState;
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitDisabled(true);
        setMessage(null);
        if (startValue >= endValue) {
            setMessage("Start time cannot come before end time.");
            setIsSubmitDisabled(false);
            return
        }
        updateAvailability();

        setIsSubmitDisabled(false);
        setDayValue('');
        setStartValue('');
        setEndValue('');
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