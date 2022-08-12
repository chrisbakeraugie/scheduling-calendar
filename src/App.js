import './App.css';
import styled from 'styled-components';
import Week from './calendar/week/Week';
import React, { useState } from 'react';
import { DEFAULT_AVAILABILITY } from './utils/utlis';
import Form from './calendar/toolbar/Form';
import { Modal } from '@mui/material';
import ModalContents from './calendar/ModalContents';

const AppContainter = styled.div`
  height:100vh;
  display: grid;
  grid-template-columns: 0.5fr repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 500px){
    height:90vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 0.5fr repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width:100vw;
  }
`;

const CalendarContainer = styled.div`  
  grid-area: 1 / 2 / 6 / 6; 
  @media (max-width: 500px){
    grid-area: 2 / 1 / 6 / 6; 
    overflow-x:auto;
    width:100%;
    height:100%;
  }
  `

const Toolbar = styled.div`
   grid-area: 1 / 1 / 6 / 2;
   display:flex;
   margin:auto;
   width:100%;
   @media (max-width: 500px){
     grid-area: 1 / 1 / 2 / 6; 
     max-width:100%;
  }
  `;

export const AvailabilityContext = React.createContext();

function App() {
  const [state, setState] = useState(DEFAULT_AVAILABILITY());
  const [modal, setModal] = useState({
    isOpen: false,
    chosenIndex: null
  });

  const handleCloseModal = () => {
    setModal({
      isOpen: false,
      chosenIndex: null
    })
  }
  return (
    <AvailabilityContext.Provider value={{ state, setState, modal, setModal }}>
      <AppContainter className="App">
        <Toolbar>
          <Form />
        </Toolbar>
        <CalendarContainer>
          <Week></Week>
        </CalendarContainer>
      </AppContainter>
      <Modal
        open={modal.isOpen}
        onClose={handleCloseModal}
      >
        <div>
          <ModalContents />
        </div>
      </Modal>
    </AvailabilityContext.Provider>
  );
}

export default App;
