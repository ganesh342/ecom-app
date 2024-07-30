import React,{useState,useEffect} from "react"
import Axios from "axios"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Logout = () =>{

    const navigate = useNavigate()
const handleSubmit = () =>{

    try{
        const URL="http://localhost:5000/auth/logout"
        console.log(URL)
        const response = axios.get(URL,{
            withCredentials:"include",
        })
        console.log(response)
         navigate("/login");
    }catch(err)
    {
        console.log("error in logout" ,err)
    }
}
    handleSubmit();
};
export default Logout
