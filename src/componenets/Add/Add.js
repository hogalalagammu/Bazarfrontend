import React from 'react'
import free from './free.png'
import {useContext} from 'react'
import './adds.css'
import { LoginContext } from '../context/ContextProvider';
export default function Add() {
  const{account, setAccount,pprise,setpprise} = useContext(LoginContext)
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;

  const checkout=async()=>{
    const address = document.getElementById('textAreaInput').value.trim();
    console.log(SERVER_URL + "dobhal");
    
    if (address.length < 20) {
      alert("Address must be at least 20 characters long.");
      return;
    }
   console.log(pprise);
    try {
      const res = await fetch (`${SERVER_URL}/checkout`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
         mode : "cors",
         body:JSON.stringify({
          items:[
            {
              id:1,
              quantity:1,
              price:pprise,
              name:"gammu"

            },
          ]
         })
      });
      const data= await res.json();
      window.location=data.url;

    } catch (error) {
      console.log(error+"error hai broooo");
    }

  }


  return (
    <div class="deliv1">
       <div className='phto'>
          <img src={free} alt="" />
       </div>
       <div className='rigg'>
         <h1>CONFIRM YOUR ADDRESS</h1>
         <textarea
      id="textAreaInput"
      name="textAreaInput"
      placeholder="Enter your text here"
      rows={4} // Number of visible rows
      cols={50} // Number of visible columns
      style={{ width: '100%', minHeight: '100px' }} // Optional inline styles
    />
    <button className='proceed-button' onClick={checkout}>Proceed To Payment</button>
       </div>
    </div>
  )
}
