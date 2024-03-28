import React, { useEffect } from 'react'
import Banner from './Banner.js'
import './maincomp.css'
import Slide from './Slide.js'
import {getProducts ,getProductsW,getProductsS} from "../redux/action/action.js";
import {NavLink,useNavigate} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import dd1 from "./dd1.jpg"
export default function Maincomp() {

  const {products} =useSelector(state => state.getproductsdata);
  const {Watch} =useSelector(state => state.getproductreducerW);
  const {Smart} =useSelector(state => state.getproductreducerS);
  console.log(products);
  console.log("hi");

  const dispatch =useDispatch();
  const dispatch1 =useDispatch();
  const dispatch2 =useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);
  useEffect(()=>{
    // dispatch(getProducts())
    dispatch1(getProductsW())
    // dispatch2(getProductsS())
  },[dispatch1]);
  useEffect(()=>{
    // dispatch(getProducts())
    // dispatch1(getProductsW())
    dispatch2(getProductsS())
  },[dispatch2]);
  
  return (
    <div className='home_section'>
      <div className="banner_part">
        <Banner/>
      </div>
      <div className="slide_part">
        <div className="left_slide">
           <Slide title="80% off" products={products} op={"products"}/>
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img src={dd1} />
          <NavLink to ={"/view/laptop"}><a>See More</a></NavLink>
        </div>

      </div>
      
      <Slide title="Watches" products={Watch} op={"Watch"}/> 
      <div className="center_img">
       <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
      </div>
      <Slide title="Mobiles" products={Smart} op={"Smart"}/> 
     
    </div>
  )
}
