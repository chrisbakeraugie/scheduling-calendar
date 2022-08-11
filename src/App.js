import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Week from './calendar/week/Week';
import React, { useState } from 'react';
import { DEFAULT_AVAILABILITY } from './utils/utlis';
import Check from './calendar/toolbar/Check';

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
  `;

export const AvailabilityContext = React.createContext();

function App() {
  const [state, setState] = useState(DEFAULT_AVAILABILITY());
  return (
    <AvailabilityContext.Provider value={{ state, setState }}>
      <AppContainter className="App">
        <Toolbar>
          <Check></Check>
        </Toolbar>
        <CalendarContainer>
          <Week></Week>
        </CalendarContainer>
      </AppContainter>
    </AvailabilityContext.Provider>
  );
}

export default App;
