import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css';

const VendingMachine = () => {  
    return(
        <div className="NavBar">
            <h1>Welcome to the Vending MAchine</h1>
            <Link to="/soda">SODA</Link>
            <Link to="/chip">CHIPS</Link>
            <Link to="/sardine">SARDINES</Link>

        </div>
    )
}

export default VendingMachine;