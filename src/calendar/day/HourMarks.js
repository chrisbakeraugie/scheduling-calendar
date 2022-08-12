import React, { useMemo } from 'react';
import styled from 'styled-components';

const MarksContainer = styled.div`
height:100%;
width:50%;
font-size:small;
text-align:start;
@media (max-width: 500px) {
    visibility:hidden;
}
`

const Mark = styled.div`
height:4%;
border-top: rgba(0,0,0,.1) solid;
margin:-.1px;
padding:0;
`;

const HourMarks = (props) => {
    const marksArr = useMemo(() => {
        let marks = [];
        for (let i = 0; i <= 23; i++) {
            if (i === 0) {
                marks.push("12 AM");
            } else if (i === 12) {
                marks.push((i) + " PM");
            } else if (i < 12) {
                marks.push(i + " AM");
            } else {
                marks.push((i - 12) + " PM");
            }
        }
        return marks;
    }, []);

    return (
        <MarksContainer>
            {marksArr.map((hour, index) => {
                return (
                    <Mark key={hour + "" + index}>
                        {hour}
                    </Mark>
                )
            })}
        </MarksContainer>
    )
}

export default HourMarks;