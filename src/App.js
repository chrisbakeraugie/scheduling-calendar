import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Week from './calendar/week/Week';
import React, { useState } from 'react';
import { DAY_DROPDOWN_OPTIONS, DEFAULT_AVAILABILITY, TIME_DROPDOWN_OPTIONS } from './utils/utlis';
import Check from './calendar/toolbar/Check';
import Dropdown from './calendar/toolbar/Dropdown';
import Form from './calendar/toolbar/Form';

const AppContainter = styled.div`
  background-color:gray;
  height:100vh;
  overflow-y:hidden;
  display: grid;
  grid-template-columns: 0.5fr repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const CalendarContainer = styled.div`  
  grid-area: 1 / 2 / 6 / 6; 
  background-color:palegreen;
  `

const Toolbar = styled.div`
   grid-area: 1 / 1 / 6 / 2;
   background-color:pink;
   display:flex;
   margin:auto;
   width:100%;
  `;

export const AvailabilityContext = React.createContext();

function App() {
  const [state, setState] = useState(DEFAULT_AVAILABILITY());
  return (
    <AvailabilityContext.Provider value={{ state, setState }}>
      <AppContainter className="App">
        <Toolbar>
          <Form />
        </Toolbar>
        <CalendarContainer>
          <Week></Week>
        </CalendarContainer>
      </AppContainter>
    </AvailabilityContext.Provider>
  );
}

export default App;
