import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <h1>Soda</h1>

            <img 
                src="https://i.giphy.com/DbD6EnlEQmjTi.gif"
                alt="Diet coke exploding everywhere"
            />
            <Link to="/">Go Back</Link>
        </div>
    )
}   

export default Soda;