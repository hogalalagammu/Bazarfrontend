import React,{useState,useContext} from 'react'
import './signup.css'
import logo from './logo.png'
import {NavLink,useNavigate} from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';
// import jwt_decode from 'jsonwebtoken';
export default function Sign_in() {
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;
  const history = useNavigate("");

  const [logdata,setData]= useState({
    email:"",
    password:""

})
console.log(logdata);

const{account, setAccount} = useContext(LoginContext)
const adddata =(e)=>{
  const { name,value}=e.target;
  setData({
    ...logdata,
    [name]:value
  })
}
const senddata =async(e)=>{
  e.preventDefault();
  const { email, password } =logdata;
  if(!email || !password ){
    toast.warn('🦄 invalid data!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
}
else{
try{
    console.log(logdata);
const res =await axios.post(`${SERVER_URL}/login`,logdata);
console.log(res.data+"lplp");
const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
const formattedExpiration = expirationDate.toUTCString();
document.cookie = `bazar=${res.data};expires=${formattedExpiration}`;
    toast.success('🦄 login succesfully !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
   
        });
        setData({...logdata, email:"", password:""})
        console.log(res.data+ "data");
        // const decodedToken = jwt_decode(res.data);
        const res2 =await axios.post(`${SERVER_URL}/loggin`,logdata);
        history("/");
        setAccount(res2.data);

}
catch(e){
    console.log("axios error");
    toast.warn('🦄 invalid data!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     
      });
}
}

}
  return (
    <div>
      <section>
        <div className="sign_container">
        <div className="sign_header">
                    <img src={logo} alt="signupimg" />
                </div>
            <div className="sign_form">
                <form method='POST'>
                    <h1>Sign-In</h1>
                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={logdata.email} onChange={adddata} name='email'  placeholder='Enter the email' id='email' />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={logdata.password} onChange={adddata} name='password' placeholder='At lest 6 char' id='password' />
                    </div>
                    <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
                </form>
                
            </div>
            <ToastContainer />
            <div className="create_accountinfo">
                  <p>New to Bazar</p>
                 <NavLink to="/register"> <button>Create your Bazar account</button></NavLink>
                </div>
        </div>
      </section>
    </div>
  )
}
