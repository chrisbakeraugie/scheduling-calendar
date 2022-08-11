import React, { useMemo } from 'react';
import styled from 'styled-components';

const MarksContainer = styled.div`
height:100%;
width:50%;
font-size:small;
text-align:start;
`

const Mark = styled.div`
height:4%;
border-top: rgba(0,0,0,.1) solid;
`;

const HourMarks = (props) => {
    const marksArr = useMemo(() => {
        let marks = [];
        for (let i = 1; i <= 24; i++) {
            if (i < 12) {
                marks.push(i + " AM");
            } else if (i === 12) {
                marks.push((i) + " PM");
            } else if (i === 24) {
                marks.push((i - 12) + " AM");
            } else {
                marks.push((i - 12) + " PM");
            }
        }
        return marks;
    }, []);

    return (
        <MarksContainer>
            {marksArr.map((hour) => {
                return (
                    <Mark>
                        {hour}
                    </Mark>
                )
            })}
        </MarksContainer>
    )
}

export default HourMarks;