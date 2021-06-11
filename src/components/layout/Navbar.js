import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header>
            <Link to="/" className="logo">grip</Link>
                <div className="menu-toggle"><i className="fas fa-bars"></i></div>
                <nav>
                <ul>
                    <li><Link to="/" className="active" id="nav-btn1">Home</Link></li>
                    <li><Link to="/profile" id="nav-btn2">Accounts</Link></li>
                    <li><Link to="/transfer" id="nav-btn3">Transfer</Link></li>
                </ul>
                </nav>
            <div className="clearfix"></div>
        </header>
    )
}

export default Navbar
