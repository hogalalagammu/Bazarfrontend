import React ,{useState}from 'react'
import './signup.css'
import logo from './logo.png'
import {NavLink} from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Sign_up() {
    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });
    const adddata = (e) => {
        const { name, value } = e.target;
        console.log(name,value);

        setUdata({
                ...udata,
                [name]: value
            
        })
    };
    const SERVER_URL=process.env.REACT_APP_SERVER_URL;
    const senddata = async(e)=>{
        e.preventDefault();
        const { fname, email, mobile, password, cpassword } =udata;
        if(!fname || !email || !mobile || !password || !cpassword){
            toast.warn('🦄 invalid data!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
               
                });
        }
        else{
        try{
            console.log(udata);
        const res =await axios.post(`${SERVER_URL}/register`,udata);
        console.log(res.data);
        
            toast.success('🦄 data succesfully added !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
           
                });
            setUdata({...udata,fname:"", email:"", mobile:"", password:"", cpassword:""})
        }
        catch(e){
            console.log("axios error");
            toast.warn('🦄 invalid data!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
               
                });
        }
    }
    }

  return (
    <div>
      <section>
        <div className="sign_container">
        <div className="sign_header">
                    <img src={logo} alt="signupimg" />
                </div>
            <div className="sign_form">
                <form method='POST'>
                    <h1>Sign-Up</h1>
                    <div className="form_data">
                        <label htmlFor="fname">Your Name</label>
                        <input type="text"  onChange={adddata} name='fname'   value={udata.fname} placeholder='Enter the email' id='email' />
                    </div>
                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input type="text"  onChange={adddata} name='email'  value={udata.email}  placeholder='Enter the email' id='email' />
                    </div>
                    <div className="form_data">
                        <label htmlFor="number">Mobile No</label>
                        <input type="text"  onChange={adddata} name='mobile'  placeholder='Enter the Mobile no' id='mobile' />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password"  onChange={adddata} name='password' value={udata.password}placeholder='At lest 6 char' id='password' />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">RE-Password</label>
                        <input type="text"  onChange={adddata} name='cpassword'   value={udata.cpassword} id='password' />
                    </div>
                    <button type="submit" className="signin_btn"  onClick={senddata}>Continue</button>
                    <p className='ok'>Already have an account ? <NavLink to="/login"><span>Sign-in</span></NavLink> </p>
                </form>
                
            </div>
            <ToastContainer />
        </div>
      </section>
    </div>
  )
}
