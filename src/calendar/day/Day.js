import { Paper } from '@mui/material';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AvailabilityContext } from '../../App';
import { numberToTime } from '../../utils/utlis';
import HourMarks from './HourMarks';


const DayContainer = styled.div`
height:calc(100% - 50px);
width:14%;
`;

const TimeContainer = styled.div`
height:100%;
position:relative;
`

const StyledText = styled.span`
margin:auto;
font-size:small;
`;

const paperSX = {
    position: "absolute",
    right: "0%",
    width: "50%",
    zIndex: "999",
    borderRadius: "10px",
    border: "solid gray",
    '&:hover': {
        cursor: "pointer",
        backgroundColor: "#ececec"
    }
}

const DayHeader = styled.div`
margin:20px;
`;

const Day = (props) => {
    const context = useContext(AvailabilityContext);

    return (
        <DayContainer>
            <DayHeader>{props.children}</DayHeader>
            <TimeContainer>
                <HourMarks />
                {context.state.map((timeSpan, index) => {
                    if (props.children === timeSpan.day) {
                        let top = (timeSpan.start / 24) * 100;
                        let height = timeSpan.end - timeSpan.start;
                        height = height * 4 + (height * .15)
                        return (
                            <Paper
                                key={index + "" + timeSpan.start}
                                elevation={8}
                                sx={{
                                    top: `${top}%`,
                                    height: `${height}%`,
                                    display: "flex",
                                    ...paperSX
                                }}
                                onClick={() => {
                                    context.setModal({
                                        isOpen: true,
                                        chosenIndex: index
                                    })
                                }}
                            >
                                <StyledText>
                                    Available
                                    <br />
                                    {` ${numberToTime(timeSpan.start)} to ${numberToTime(timeSpan.end)}`}
                                </StyledText>
                            </Paper>
                        );
                    } 
                    return <></>
                })}
            </TimeContainer>
        </DayContainer>
    )
}

export default Day;