import styled from 'styled-components';
import Dropdown from './Dropdown';
import { DAY_DROPDOWN_OPTIONS, TIME_DROPDOWN_OPTIONS } from '../../utils/utlis';
import { Button, Typography } from '@mui/material';
import { useEffect, useState, useContext, useCallback } from 'react';
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
        const dayAvailability = context.state.filter((block) => block.day === dayValue);
        for (let i = dayAvailability.length - 1; i >= 0; i--) {
            const oldAvailabilityCovered = dayAvailability[i].start >= startValue && dayAvailability[i].end <= endValue;
            const newAvailabilityCovered = dayAvailability[i].start <= startValue && dayAvailability[i].end >= endValue;
            const newStartEarlier = dayAvailability[i].start >= startValue && dayAvailability[i].end >= startValue;
            const newEndLaterThanStart = dayAvailability[i].start >= endValue;
            const newEndLater = dayAvailability[i].start <= endValue && dayAvailability[i].end <= endValue;
            const newStartLaterThanEnd = dayAvailability[i].end <= startValue;
            if (oldAvailabilityCovered) {
                dayAvailability.splice(i, 1);
            } else if (newAvailabilityCovered) {
                setMessage("Time slot already available.")
            } else if (newStartEarlier && !newEndLaterThanStart) {
                dayAvailability[i].start = startValue;
            } else if (newEndLater && !newStartLaterThanEnd) {
                dayAvailability[i].end = endValue;
            } else {
                dayAvailability.push({
                    day: dayValue,
                    start: startValue,
                    end: endValue
                })
            }
        }
        context.setState((prevState) => {
            let newState = context.state.filter((block) => block.day !== dayValue);
            if (dayAvailability.length > 0) {
                newState.push(...dayAvailability)
            } else {
                newState.push({
                    day: dayValue,
                    start: startValue,
                    end: endValue
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