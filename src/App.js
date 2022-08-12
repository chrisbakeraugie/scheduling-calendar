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
`;

const CalendarContainer = styled.div`  
  grid-area: 1 / 2 / 6 / 6; 
  `

const Toolbar = styled.div`
   grid-area: 1 / 1 / 6 / 2;
   display:flex;
   margin:auto;
   width:100%;
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
        <Modal
          open={modal.isOpen}
          onClose={handleCloseModal}
        >
          <div>
            <ModalContents />
          </div>
        </Modal>
      </AppContainter>
    </AvailabilityContext.Provider>
  );
}

export default App;
