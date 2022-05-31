import React from 'react'
import { useState } from 'react'
import '../login/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
function Signup(){
    const[username,setUsername] = useState('')
    const[mobile,setMobile] = useState('')
    const[email,setEmail]  = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {username,mobile,email,password}
        try {
            let res = await axios.post("/api/register",data)
        if(res)
        {
            localStorage.setItem('username',res.data.username)
            navigate('/')

        }
            
        } catch ({response}) {
            console.log(response.data);
        }

    }
    return(
        <div className="main">
            <div className="container">
                <h1>Signup</h1>
                <form action="">
                <div className="inputDiv">
                    <label className='label'>username</label>         
                    <input className='input' value={username} onChange={(e)=>setUsername(e.target.value)} type="text"/>
                </div>
                <div className="inputDiv">
                    <label className='label'>mobile</label>
                    <input className='input' value={mobile} onChange={(e)=>setMobile(e.target.value)} type="mobile"/>
                </div>
                <div className="inputDiv">
                    <label className='label'>email</label>
                    <input className='input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                </div>
                <div className="inputDiv">
                    <label className='label'>password</label>
                    <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                </div>
                <div className='buttonDiv'>
                    <button type='submit' onClick={handleSubmit} className='button'>Register</button>
                </div>
                </form>
                <div>
                    <p onClick={()=>navigate('/login')}>Already have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Signup