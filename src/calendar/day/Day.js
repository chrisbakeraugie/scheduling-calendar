import React, { useContext } from 'react';
import styled from 'styled-components';
import { AvailabilityContext } from '../../App';
import HourMarks from './HourMarks';

const DayContainer = styled.div`
height:100%;
background-color:lightblue;
width:14%;
`;

const TimeContainer = styled.div`
height:100%;
position:relative;
`

const Block = styled.div`
position:absolute;
top:${props => props.top}%;
width:99%;
height:${props => props.height * 4 + (props.height * .15)}%;
z-index:999;
border-radius:10px;
border:solid gray;
`;

const Day = (props) => {
    const context = useContext(AvailabilityContext);

    return (
        <DayContainer>
            <div>{props.children}</div>
            <TimeContainer>
            <HourMarks />
                {context.state.map((timeSpan, index) => {
                    if (props.children === timeSpan.day) {
                        console.log(props.children)
                        let top = (timeSpan.start / 24) * 100;
                        let height = timeSpan.end - timeSpan.start;
                        console.log(height)
                        return <Block key={index + "" + timeSpan.start} top={top} height={height}>Hello</Block>
                    }
                })}
            </TimeContainer>
        </DayContainer>
    )
}

export default Day;