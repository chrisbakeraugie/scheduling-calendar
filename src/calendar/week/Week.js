import React, { useMemo } from 'react';
import Day from '../day/Day';
import styled from 'styled-components';
import { DAYS_OF_WEEK } from '../../utils/utlis';

const WeekFlex = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-evenly;
`;


const Week = () => {
    const days = useMemo(() => DAYS_OF_WEEK, [])
    return (
        <WeekFlex>
            {days.map((day, index) => <Day key={day + "" + index}>{day}</Day>)}
        </WeekFlex>
    )
}

export default Week;