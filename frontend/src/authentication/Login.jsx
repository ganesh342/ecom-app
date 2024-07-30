import React,{useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
const Login = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        try{
            e.preventDefault()
            const body = {
                email,
                password
            }
            const URL="http://localhost:5000/"+"auth/login"
            console.log(URL,body)
            const response = await axios.post(URL,body,{
                withCredentials:"include",
            })
             console.log(response);
             navigate("/");
        }catch(err)
        {
            console.log("error in login" ,err)
        }
       
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>

              <label htmlFor="email">Email</label>
              <input type="email" autocomplete="off" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

              <label htmlFor="password">Password</label>
              <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" onSubmit={handleSubmit}>Login</button>
              <Link to="/forgotPassword">Forget Password?</Link>
              <p>Don't Have Account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login
