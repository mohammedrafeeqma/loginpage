import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import './home.css'

function Home(){
    const[username,setUsername] = useState('')
    const handleLogout = ()=>{
        localStorage.removeItem('user')
        setRefresh(!refresh)
    }
    const[refresh,setRefresh] = useState(false)

    const navigate = useNavigate()
    useEffect(()=>{
        let user = localStorage.getItem('user')
        setUsername(user)
        if(!user)
        {
            navigate('/login')
        }
    })
    return(
        <div>
            <Navbar handleLogout={handleLogout}/>
            <div className="homeContainer">
                
                <h2>welcome to homepage {username}</h2>
            </div>
        </div>
    )
}

export default Home