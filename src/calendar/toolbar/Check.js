import { useContext } from "react";
import { AvailabilityContext } from "../../App";

const Check = () => {
    const context = useContext(AvailabilityContext);
    return (
        <>
            <button onClick={() => context.setState([])}>{JSON.stringify(context.state)}</button>
        </>
    )
}

export default Check;