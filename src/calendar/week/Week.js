import React, { useMemo } from 'react';
import Day from '../day/Day';
import styled from 'styled-components';

const WeekFlex = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-evenly;
`;


const Week = () => {
    const days = useMemo(() => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], [])
    return (
        <WeekFlex>
            {days.map((day) => <Day>{day}</Day>)}
        </WeekFlex>
    )
}

export default Week;