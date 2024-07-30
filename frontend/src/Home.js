import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from "./components/FeatureProduct";
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
const Home = () => {
  const navigate = useNavigate()
    useEffect(()=>{
      try{
       const URL = "http://localhost:5000/"+"auth/verify"
       const response =  axios.get(URL,{
           withCredentials:"include",
       })
       navigate('/')
       }catch(err) {
           console.log(err)
       }
    },[]);
  const data = {
    name: "My store",
  };
  return  (
  <>
  <HeroSection myData={data} />
  <FeatureProduct />
  <Services />
  <Trusted />
  </>
  );
};



export default Home;
