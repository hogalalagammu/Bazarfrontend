import Nav from './componenets/header/Nav';
import Newnav from './componenets/newnavbar/Newnav'
import Maincomp from './componenets/home/Maincomp'
import Footer from './componenets/Footer/Footer'
import './App.css';
import Sign_in from './componenets/signup_signin/Sign_in'
import Sign_up from './componenets/signup_signin/Sign_up'
import {Routes,Route} from "react-router-dom"
import Cart from "./componenets/cart/Cart"
import Buynow from "./componenets/buynow/Buynow"
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Add from "./componenets/Add/Add";
import In from './componenets/IN/In';
import View from "./componenets/View/view"
function App() {
  const [data,setData]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true);
    },2000)
  },[])
  return (
    <>
    {
      data ? (
         <>
         <Nav/>
      <Newnav/>
      <Routes>
        <Route path="/" element={<Maincomp/>}  />
        <Route path="/login" element={<Sign_in/>}  />
        <Route path="/register" element={<Sign_up/>}  />
        <Route path="/getproducts/:id" element={<Cart/>}  />
        <Route path="/buynow" element={<Buynow/>}  />
        <Route path="/add" element={<Add/>}  />
        <Route path="/view/:pp" element={<View/>}  />
        <Route path="/op" element={<In/>}  />
      </Routes>
      <Footer/></>
      ): (
        <div className="circle">
          <CircularProgress/>
          <h2>Loading...</h2>
        </div>
      )
    }
      
    </>
  );
}

export default App;
