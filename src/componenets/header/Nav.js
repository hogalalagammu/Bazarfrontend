import React, { useContext, useEffect, useState } from 'react'
import "./nav.css";
import logo from "./logo.png";
import SearchIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import {NavLink, useNavigate, useNavigation} from "react-router-dom"
import {LoginContext} from "../context/ContextProvider"
import {getProducts ,getProductsW,getProductsS,getProductggy,getProductllap} from "../redux/action/action.js";
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useDispatch,useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import Rightheader from './Rightheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Nav() {
  const SERVER_URL=process.env.REACT_APP_SERVER_URL;
    const{account, setAccount} = useContext(LoginContext);
    const history =useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const op=()=>{
        history("/");
    }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    logoutuser();
    setAnchorEl(null);
  };
    const [dropen,setdropen]=useState(false);
    const getDetailsValidUser = async () => {
        try {
            const response = await axios.get(`${SERVER_URL}/validuser`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
    
            // Handle the response data as needed
            console.log(response.data+"gammu");
            setAccount(response.data);
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    };
    const handleopen = ()=>{
        setdropen(true);
    }
    const handledrclose=()=>{
        setdropen(false);
    }
    const [text,settext]=useState("");
    console.log(text);
    const [liopen,setliopen]=useState(true);

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

  const combinedArray = [...products, ...Watch, ...Smart,...gym,...lap];
    const getText =(iteams)=>{
        settext(iteams);
        setliopen(false);
    }
    const logoutuser = async () => {
        try {
            const response2 = await axios.get(`${SERVER_URL}/logout`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
    
            // Handle the response data as needed
            console.log(response2.data+"gammupapu");
            // alert("kjhgf");
            toast.success('🦄 logout succesfully !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
           
                });
            history("/");
            setAccount(false);
            
            
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    };
    useEffect(()=>{
        getDetailsValidUser();
    },[])
    const [leng,setleng] =useState(0);
    useEffect(()=>{
        const fun1=()=>{
            setleng(account.carts.length);
        }
        if(account)
        fun1();
    },[account]);

    console.log("jihugfdghi"+account);




  return (
   <header>
    <nav>
        <div className="left">

        <IconButton className='hamburgur' onClick={handleopen}>
            <MenuIcon style={{color:"#fff"}} />
          </IconButton>
          <Drawer open={dropen} onClose={handledrclose} >
            <Rightheader logclose={handledrclose} logoutuser={logoutuser}/>
          </Drawer>

            <div className="navlogo">
           <NavLink to="/"><img src= {logo} alt="error" /></NavLink> 
            </div>
            <div className="nav_searchbar">
                <input type="text" name ="text"
                onChange={(e)=>getText(e.target.value)}
                 placeholder='Enter the name of Product' 
                
                />
                <div className="search_icon">
                    <SearchIcon/>
                </div>
                {
                    text && 
                    <List className='extrasearch' hidden={liopen}>
                        {
                            combinedArray.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                    <NavLink to={`/getproducts/${product.id}`} onClick={()=>{setliopen(true)}}>
                                    {product.title.longTitle}
                                    </NavLink>
                                    
                                </ListItem>
                            ))
                        }
                    </List>
                }
            </div>
        </div>
        <div className="right">
          { account ?"": <div className="nav_btn">
               <NavLink to="/login">Sign in</NavLink>
            </div>}
            <div className="cart_btn">
            {console.log(account)}
            {
                account ? <NavLink to="/buynow">
                <Badge badgeContent={leng} color="primary">
                       <ShoppingCartSharpIcon id ="icon"/>
                     </Badge>
                </NavLink> :<NavLink to="/login">
            <Badge badgeContent={0} color="primary">
                   <ShoppingCartSharpIcon id ="icon"/>
                 </Badge>
            </NavLink>
            }
            <ToastContainer/>
                
                 <p>Cart</p>
            </div>
            {
                account ?<Avatar className='avtar2'
                id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>{account.fname[0].toUpperCase()}</Avatar>:
                <Avatar className='avtar'
                id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}></Avatar>
            }
            
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={op}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
            account?  <MenuItem onClick={handleClose}   style={{ margin: 10 }}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> Logout</MenuItem>:""
        }
      </Menu>
            
        </div>
    </nav>
   </header>

  )
}
