import React, { useEffect, useState } from 'react'
import './buynow.css'
import { Divider } from '@mui/material'
import {NavLink, useNavigate, useNavigation} from "react-router-dom"
import logo from './logo.png'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'
import axios from 'axios'
export default function Buynow() {
  const [cartdata, setcartdata] = useState("");
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;
  const car =[];
  console.log("cartdtatatb  " + cartdata);
  const getdatabuy = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/cartdetails`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      console.log(response.data.carts);
      setcartdata(response.data.carts);
    } catch (error) {
      console.error('Error fetching cart details:', error);
      throw error;
    }

  };
  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <>
      {
        cartdata.length ? <div className='buynow_section'>
          <div className='buynow_container'>
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />
              {
                cartdata.map((e, k) => {
                  const isItemPresent = car.find((item) => item === e.id);
                 if (!isItemPresent) {
                  car.push(e.id);
                  console.log(e.id + "e.id");
                 }
                  
                  return (
                    <>
                    {
                     (!isItemPresent)? <div className="item_containert">
                        <NavLink to={`/getproducts/${e.id}`}> <img src={e.url} alt="error" /></NavLink>
                        {/* <img src={e.url} alt="error" /> */}
                        <div className="item_details">
                          <h3>{e.title?.longTitle}</h3>
                          <h3>{e.title?.shortTitle}</h3>
                          <h3 className="diffrentprice">₹ {e.price.mrp}</h3>
                          <p className="unusuall">Usually dispatched in 8 days.</p>
                          <p>Eligible for FREE Shipping</p>
                          <img src={logo} alt="hi" />
                          <Option deletedata={e.id} get={getdatabuy}/>
                          <br />
                          <Subtotal  iteam={cartdata} e={e}  get={getdatabuy}/>
                        </div>
                        {/* <h3 className="item_price">Rs{e.price?.cost?.toFixed(2)}.00</h3> */}
                        <Divider /> 
                      </div> : ""}
                    </>
                  )
                })
              }

              
            </div>
            <Right iteam={cartdata}/>
          </div>
        </div> : ""

      }
    </>
  )
}
