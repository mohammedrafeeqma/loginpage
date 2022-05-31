import React from 'react'
import './navbar.css'
function Navbar({handleLogout}){
    
    return(
        <div className="navbar">
            <div>
                <h1>Home page</h1>
            </div>
            <div>
                <p onClick={handleLogout}>Logout</p>
            </div>
        </div>
    )
}

export default Navbar