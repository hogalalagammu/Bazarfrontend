import React, { useContext, useEffect, useState } from 'react'
import {Divider} from '@mui/material'
import './cart.css'
import { NavLink,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {LoginContext} from "../context/ContextProvider"
import CircularProgress from '@mui/material/CircularProgress';

export default function Cart() {

  const {id} =useParams("");
  // console.log(id)
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;
  const history = useNavigate("");
  const{account, setAccount,pprise,setpprise} = useContext(LoginContext)
  const hoga =(e)=>{
    setpprise(e);
  }
  const [inddata,setindata] = useState("");
  console.log(inddata.url + "okthis");
  const getinddata = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/getproducts/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = response.data;

        if (response.status !== 201) {
            console.log("No data");
        } else {
            setindata(data);
        }
    } catch (error) {
        console.error("Error fetching individual data:", error);
    }
};
  useEffect(()=>{
    setTimeout(getinddata,1000)
  },[id]);

  const addtocart = async (id) => {
    console.log(id);

    try {
        const response = await axios.post(`${SERVER_URL}/addcart/${id}`, {
            inddata
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
            // Cart added successfully
            // setAccount(data1);
            // history.push("/buynow");
            history("/buynow");
            setAccount(data1);
        }
    } catch (error) {
        // Handle any errors here
        alert("login your self");
        console.error("Error adding to cart:", error);
    }
};

  
  return (
    
    <div className='cart_section'>
      { inddata && Object.keys(inddata).length &&
      <div className="cart_container">
        <div className="left_cart">
            <img src={process.env.PUBLIC_URL + inddata.url} alt="error" />
            <div className="cart_btn">
                <button className='cart_btn1' onClick={()=>addtocart(inddata.id)} >Add to Cart</button>
                <NavLink to={"/add"}><button className='cart_btn2' onClick={()=>{hoga(inddata.price.cost)}}>Buy Now</button></NavLink>
                
            </div>
        </div>
        <div className="right_cart">
            <h3>{inddata.title.shortTitle}</h3>
            <h4>{inddata.title.longTitle}</h4>
            <Divider/>
            <p className="mrp">M.R.P. : ₹{inddata.price.mrp}</p>
            <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
            <p>You save : <span style={{ color: "#B12704" }}>  ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>
            <div className="discount_box">
            <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
            </div>
            <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
        </div>
      </div>
  }
  {
    (inddata==="") ? <div className="circle">
    <CircularProgress/>
    <h2>Loading...</h2>
  </div> : ""
  }
    </div>
  )
}
