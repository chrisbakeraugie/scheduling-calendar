import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Week from './calendar/week/Week';

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

function App() {
  return (
    <AppContainter className="App">
      <Toolbar></Toolbar>
      <CalendarContainer>
        <Week></Week>
      </CalendarContainer>
    </AppContainter>
  );
}

export default App;
