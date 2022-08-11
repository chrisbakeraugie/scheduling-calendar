import React from 'react';
import styled from 'styled-components';
import HourMarks from './HourMarks';

const DayContainer = styled.div`
height:100%;
background-color:lightblue;
width:14%;
`;

const Day = (props) => {
    return (
        <DayContainer>
            <div>{props.children}</div>
            <HourMarks></HourMarks>
        </DayContainer>
    )
}

export default Day;