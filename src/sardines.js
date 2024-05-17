import React from "react";
import { Link } from "react-router-dom";

const Sardine = () => {
    return (
        <div>
            <h1>YOU DONT EAT THE SARDINES. THE SARDINES, THEY EAT YOU! <Link to="/">GO BACK</Link></h1>

            <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHk3aG1pbmhmeW8wemlldjJrY3l1N2VuNHR1NzQ1ZmZxeGphZDN4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g99aQJfY5QrmPyY6J5/giphy.gif"
                alt="Diet coke exploding everywhere"
            />
        </div>
    )
}   

export default Sardine;