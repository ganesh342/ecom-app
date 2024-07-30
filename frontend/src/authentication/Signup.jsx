import React,{useState} from "react"
import Axios from "axios"
import {Link,useNavigate} from "react-router-dom"
const Signup = () =>{
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    const navigate = useNavigate()
    const handleSubmit = async (e) =>{
        try{
         e.preventDefault()
        const URL = "http://localhost:5000/"+"auth/signup"
        const response = await Axios.post(URL,{
            username,
            email,
            password,
        },{
            withCredentials:"include",
        })
        console.log(response)
        navigate('/login')
        }catch(err) {
            console.log(err)
        }
    };
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>

              <label htmlFor="email">Email</label>
              <input type="email" autocomplete="off" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

              <label htmlFor="password">Password</label>
              <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
              <p>Have an Account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup