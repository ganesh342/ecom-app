import React, { useState } from "react"
import Axios from "axios"
import {Link,useNavigate} from "react-router-dom"

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post('https://localhost:5000/auth/forgot-password',{
            email,
        }).then(response => {
            if(response.data.status)
            {
                alert("check you email for reset password link")
            navigate('/login')
            }
        }).catch(err => {
            console.log(err);
        })
    };
  return (
    <div>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>

      <label htmlFor="email">Email</label>
      <input type="email" autocomplete="off" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

      <button type="submit" onSubmit={handleSubmit}>Send</button>
    </form>
</div>
  )
}

export default ForgotPassword
