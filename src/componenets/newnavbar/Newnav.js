import React from 'react'
import './newnav.css'
import {NavLink, useNavigate, useNavigation,useParams} from "react-router-dom"
export default function Newnav() {


  return (
    <div className='new_nav'> 
    <div className="nav_data">
      <div className="left_data">
      <NavLink to={"/view/products"}><p>All</p></NavLink>
      <NavLink to={"/view/Smart"}><p>Mobile</p></NavLink>
      <NavLink to={"/view/Watch"}><p>Watch</p></NavLink>
      <NavLink to={"/view/gym"}><p>Gym</p></NavLink>
      <NavLink to={"/view/laptop"}><p>laptop</p></NavLink>
      </div>
      <div className="right_data">

      </div>
    </div>
      
    </div>
  )
}
