import {React,useContext,useState,useEffect} from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import logo from './logo.png'
import { LoginContext } from '../context/ContextProvider';
export default function Right({iteam}) {
  const [price,setprice]=useState(0);
  const{pprise,setpprise} = useContext(LoginContext)
  useEffect(()=>{
    totalamount();
  },[iteam])
  const totalamount=()=>{
    let price =0;
    iteam.map((item)=>{
      price+=item.price?.cost
      setprice(price);
      setpprise(price);
    })
  }
  return (
    <div className='right_buy'>
        <img src={logo} alt="error" /> 
        <div className="cost_right">
        <p>Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                    <h3>Subtotal ({iteam.length} items): <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
                    <NavLink to="/add"><button className="rightbuy_btn" >Proceed to Buy</button></NavLink>
                    
                    
        </div>
      
    </div>
  )
}
