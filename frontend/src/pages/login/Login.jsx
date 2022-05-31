import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './login.css'
function Login(){
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {username,password}
        try {
            let res = await axios.post('/api/login',data)
            if(res)
            {
                localStorage.setItem('user',res.data.username)
                navigate('/')
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        let user = localStorage.getItem('user')
        if(user)
        {
            navigate('/home')
        }
    })

    return(
        <div className="main">
            <div className="container">
                <h1>Login</h1>
                <form action="">
                <div className="inputDiv">
                    <label className='label'>username</label>         
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className='input' type="text"/>
                </div>
                <div className="inputDiv">
                    <label className='label'>password</label>
                    <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                </div>
                <div className='buttonDiv'>
                    <button type='submit' onClick={handleSubmit} className='button'>Login</button>
                </div>
                </form>
                <div>
                    <p onClick={()=>{navigate('/signup')}}>create an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Login