import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/ContextProvider';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Subtotal({iteam,e,get}) {
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;
  const [price,setprice]=useState(0);
  const [quant,setquant]=useState(1);
  const [ii,setii] =useState(0);
  const{account, setAccount} = useContext(LoginContext)
  const countit=()=>{
    var op=0;
    var pri=0;
    for (let i = 0; i < iteam.length; i++) {
      if(iteam[i].id===e.id){
        op++;
        pri+=e.price?.mrp;
      }      
    }
    setquant(op);
    setprice(pri);
  }
  useEffect(()=>{
    console.log(quant + "ejofhcbd");
    countit();
    console.log(iteam);
    console.log(quant);
    setii(0);
  },[ii])
  const addtocart = async (id) => {
    console.log(id);

    try {
        const response = await axios.post(`${SERVER_URL}/addcart/${id}`, {
            iteam
        }, {
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        const data1 = response.data;

        if (response.status !== 201) {
            alert("No data available");
        } else {
            setAccount(data1);
            iteam.unshift(e);
        }
    } catch (error) {
        // Handle any errors here
        console.error("Error adding to cart:", error);
    }
    countit();
    setii(1);
};


const remtocart = async (id) => {
  console.log(id);
  countit();
  if(quant===1){
    removedata();
  }
  else{
    try {
      const response = await axios.post(`${SERVER_URL}/remcart/${id}`, {
          iteam
      }, {
          withCredentials: true,
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          }
      });

      const data1 = response.data;
      console.log(iteam + "this is ");
      if (response.status !== 201) {
          alert("No data available");
      } else {
          // Cart added successfully
          // setAccount(data1);
          // history.push("/buynow");
          setAccount(data1);
          console.log(account);
          console.log(data1);
          iteam.splice(e, 1);
        

      }
  } catch (error) {
      // Handle any errors here
      console.error("Error adding to cart:", error);
  }
  countit();
  setii(1);
  }
  
};


 const removedata= async(req,res)=>{
    try {
      const response = await axios.get(`${SERVER_URL}/remove/${e.id}`, {
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
    <div className='sub_item'>
      <button  onClick={()=>remtocart(e.id)} style={{ width: "50px", height: "50px", backgroundColor: "orange", borderRadius: "50%", border: "none", fontSize: "24px" }}>-</button>
<span> </span>
<button onClick={()=>addtocart(e.id)} style={{ width: "50px", height: "50px", backgroundColor: "orange", borderRadius: "50%", border: "none", fontSize: "24px" }}>+</button>

      <span> </span>
      <h3>Subtotal ({quant} iteam) : <strong style={{fontWeight:700 , color:"#111"}}>Rs{price}.00</strong></h3>
    </div>
  )
}
