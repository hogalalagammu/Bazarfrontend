import React, { useEffect, useState } from 'react'
import { Divider } from '@mui/material'
import {NavLink, useNavigate, useNavigation,useParams} from "react-router-dom"
import axios from 'axios'
import {getProducts ,getProductsW,getProductsS,getProductggy,getProductllap} from "../redux/action/action.js";
import { useDispatch,useSelector } from 'react-redux';
export default function View() {
  const {pp} =useParams("");
  
  const {products} =useSelector(state => state.getproductsdata);
  const {Watch} =useSelector(state => state.getproductreducerW);
  const {Smart} =useSelector(state => state.getproductreducerS);
  const {gym}=useSelector(state => state.getProductreducerg);
  const {lap}=useSelector(state => state.getProductreducerl);
  console.log(products);
  console.log("hi");

  const dispatch =useDispatch();
  const dispatch1 =useDispatch();
  const dispatch2 =useDispatch();
  const dispatch3 =useDispatch();
  const dispatch4 =useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);
  
  useEffect(()=>{
    dispatch1(getProductsW())
    
  },[dispatch1]);
  useEffect(()=>{
    dispatch2(getProductsS())
  },[dispatch2]);
  useEffect(()=>{
    dispatch2(getProductggy())
  },[dispatch3]);
  useEffect(()=>{
    dispatch2(getProductllap())
  },[dispatch4]);


  const [opp,setopp]=useState([]);
 
  const check=()=>{
    if(pp==='products'){
      console.log(products);
      setopp(products);
      console.log(opp);
    }
    else if(pp==='Watch'){
      setopp(Watch);
    }
    else if(pp==='Smart'){
      setopp(Smart);
    }
    else if (pp==='gym') {
      setopp(gym);
    }
    else if (pp==='laptop') {
      setopp(lap);
    }
  }
  useEffect(()=>{
    check();
  },[pp]);
  useEffect(()=>{
    console.log(opp);
  },[opp]);

  return (
    <>
     <div className='buynow_section'>
          <div className='buynow_container'>
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <Divider />
              {
                opp.map((e, k) => {
                  
                  return (
                    <>
                     <div className="item_containert">
                        <NavLink to={`/getproducts/${e.id}`}> <img src={e.url} alt="error" /></NavLink>
                        {/* <img src={e.url} alt="error" /> */}
                        <div className="item_details">
                          <h3>{e.title?.longTitle}</h3>
                          <h3>{e.title?.shortTitle}</h3>
                          <h3 className="diffrentprice">₹ {e.price.mrp}</h3>
                          <h4>{e.description}</h4>
                          <p className="unusuall">Usually dispatched in 8 days.</p>
                          <p>Eligible for FREE Shipping</p>

                        
                        </div>
                        {/* <h3 className="item_price">Rs{e.price?.cost?.toFixed(2)}.00</h3> */}
                        <Divider /> 
                      </div> 
                    </>
                  )
                })
              }

              
            </div>
          </div>
        </div> 
    </>
  )
}
