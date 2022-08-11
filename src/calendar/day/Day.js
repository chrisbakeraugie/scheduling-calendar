import React, { useContext } from 'react';
import styled from 'styled-components';
import { AvailabilityContext } from '../../App';
import HourMarks from './HourMarks';

const DayContainer = styled.div`
height:100%;
background-color:lightblue;
width:14%;
position:relative;
`;

const Block = styled.div`
position:absolute;
top:${props => props.top}%;
width:100%;
height:${props => props.height * 4 + (props.height * .15)}%;
z-index:999;
`;

const Day = (props) => {
    const context = useContext(AvailabilityContext);

    return (
        <DayContainer>
            {/* <div>{props.children}</div> */}
            <HourMarks />
            {context.state.map((timeSpan, index) => {
                if (props.children === timeSpan.day) {
                    console.log(props.children)
                    let top = (timeSpan.start / 24) * 100;
                    let height = timeSpan.end - timeSpan.start;
                    console.log(height)

                    return <Block key={index + "" + timeSpan.start} top={top} height={height} >Hello</Block>
                }
            })}
        </DayContainer>
    )
}

export default Day;