import React,{useState} from "react"
import Axios from "axios"
import {Link,useNavigate,useParams} from "react-router-dom"

const ResetPassword = () => {
    const [password,setPassword] = useState("");
    const {token} = useParams()
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post('https://localhost:5000/auth/reset-password'+token,{
            password,
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
    <h2>Reset Password</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit" onSubmit={handleSubmit}>Send</button>
    </form>
</div>
  )
}

export default ResetPassword

