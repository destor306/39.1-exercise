import React, {useState} from "react";
import { Link } from "react-router-dom";
const Chip = () => {
    const [chips, setChips] = useState(0);

    const handleClick = () => { 
        setChips(chips + 1);    
    }

    return (
        <div>
            <h1>Chip</h1>

            <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmd3N3BvdmJjbm9yaHJhMWlpMjczdGR3MjI2eDBra28xeWRwM2E5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZsI3SMiLozNjn5rDGv/giphy-downsized-large.gif"
                alt="Diet coke exploding everywhere"
            />
            <p>BAGS EATEN: {chips}</p>
            <button onClick={handleClick}>EAT</button>

            <Link to="/">Go Back</Link>
        </div>
    )
}   

export default Chip;