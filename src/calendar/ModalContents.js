import { Button, Paper } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { AvailabilityContext } from "../App";
import { numberToTime } from "../utils/utlis";


const ModalContents = () => {
    const context = useContext(AvailabilityContext);
    const item = useMemo(() => {
        return context.state[context.modal.chosenIndex]
    }, [context]);

    const handleRemoveAvailability = () => {
        context.setState((prevState) => {
            let newState = [...prevState];
            newState.splice(context.modal.chosenIndex, 1);
            return newState;
        })
        context.setModal({
            isOpen: false,
            chosenIndex: null
        })
    }

    const paperSX = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "500px",
        minHeight: "50px",
        zIndex: "999",
        borderRadius: "10px",
        border: "solid gray",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center"
    }
    return (
        <Paper sx={paperSX}>
            <h3>
                Availability: {`${numberToTime(item.start)} to ${numberToTime(item.end)}`}
            </h3>
            <Button variant="outlined" onClick={handleRemoveAvailability}>Delete Time</Button>
        </Paper>
    )
}

export default ModalContents;