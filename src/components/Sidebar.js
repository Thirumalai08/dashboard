import React, { useState } from 'react'
import { Badge, Nav, NavbarBrand, NavItem} from 'reactstrap'
import { Link as NavLink } from "react-router-dom";
import {AiFillDashboard} from 'react-icons/ai'
import {RiFileEditLine} from 'react-icons/ri'
import {CgMenuBoxed} from 'react-icons/cg'
import {BsPeople} from 'react-icons/bs'
import {SiGoogleanalytics} from 'react-icons/si'
import {GrRestaurant} from 'react-icons/gr'

function Sidebar(){

    const [activeMenu,setActiveMenu] = useState()

    return(
       <div className="sidebar">
           <NavbarBrand href="/" className="logo text-dark">
               <h2><GrRestaurant />&nbsp;Davur</h2>
           </NavbarBrand>
           <Nav vertical className="sidebar__links">
            <NavItem className="sidebar__item">
                <NavLink
                    className={activeMenu === 'dashboard' ? 'sidebar__link active' : 'sidebar__link'}
                    onClick={()=>{setActiveMenu('dashboard')}}
                 //className="sidebar__link"  
                 to="/"
                 ><AiFillDashboard className="icon" />Dashboard</NavLink>
            </NavItem>
            <NavItem className="sidebar__item">
                <NavLink to="/orders" 
                className={activeMenu === 'orders' ? 'sidebar__link active' : 'sidebar__link'}
                onClick={()=>{setActiveMenu('orders')}}
                ><RiFileEditLine className="icon" />Orders&nbsp;<Badge color="secondary" className="badge">25</Badge></NavLink>
            </NavItem>
            <NavItem className="sidebar__item">
                <NavLink to="#"
                className={activeMenu === 'menus' ? 'sidebar__link active' : 'sidebar__link'}
                onClick={()=>{setActiveMenu('menus')}}
                ><CgMenuBoxed className="icon" />Menus</NavLink>
            </NavItem>
            <NavItem className="sidebar__item">
                <NavLink to="/customers" 
                className={activeMenu === 'customers' ? 'sidebar__link active' : 'sidebar__link'}
                onClick={()=>{setActiveMenu('customers')}}
                ><BsPeople className="icon" />Customers</NavLink>
            </NavItem>
            <NavItem className="sidebar__item">
                <NavLink to="/analytics" 
                className={activeMenu === 'analytics' ? 'sidebar__link active' : 'sidebar__link'}
                onClick={()=>{setActiveMenu('analytics')}}
                ><SiGoogleanalytics className="icon" />Analytics</NavLink>
            </NavItem>
           </Nav>
       </div>
    )
}
export default Sidebar