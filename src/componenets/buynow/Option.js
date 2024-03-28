import {React,useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { LoginContext } from '../context/ContextProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Option({deletedata,get}) {

  const{account, setAccount} = useContext(LoginContext)
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;
  const removedata= async(req,res)=>{
    try {
      const response = await axios.get(`${SERVER_URL}/remove/${deletedata}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
     
        console.log("data deleted ");
        setAccount(response.data);

        get();
        toast.success('🦄 data deleted succesfully !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
     
          });
    
      
    } catch (error) {
      console.error('Error fetching cart details:', error);
      throw error;
    }
  }

  

  return (
    <div className='add_remove_select'> 
      <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
       <p className='forremovemedia'>Save Or Later</p><span>|</span> 
      <p className='forremovemedia'>See More Like this</p> 
      <ToastContainer/>
    </div>
  )
}
