import React from 'react'
import { Badge, Collapse, Form, Input, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import {RiBarChartHorizontalFill} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessageDetail} from 'react-icons/bi'
import {FiGift,FiSettings} from 'react-icons/fi'


function Header(){
    return(
        <div>
            <Navbar expand="md" className="header sticky-top">
                <RiBarChartHorizontalFill className="icon" />
                <NavbarToggler 
                //onClick={} 
                />
                <Collapse 
                //isOpen={isOpen} 
                navbar>
                    <Nav className="mr-auto">
                        <Form className="d-flex">
                            <Input type="text" placeholder="Search Here" className="ml-5" style={{width:"400px"}} />
                        </Form>
                    </Nav>
                    <Nav className="m-auto">
                        <NavItem>
                            <NavLink href="/" className="nav-mid__link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="nav-mid__link">Tools</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="nav-mid__link">Help</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="nav-right__item">
                            <NavLink href="/" className="nav-right__link">
                                <IoMdNotificationsOutline className="nav__icon" />
                                <Badge color="secondary" className="badge">12</Badge>    
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-right__item">
                            <NavLink href="/" className="nav-right__link">
                                <BiMessageDetail className="nav__icon" />
                                <Badge color="secondary" className="badge">5</Badge>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-right__item">
                            <NavLink href="/" className="nav-right__link">
                                <FiGift className="nav__icon" />
                                <Badge color="secondary" className="badge">2</Badge>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-right__item">
                            <NavLink href="/" className="nav-right__link">
                                <FiSettings className="nav__icon" />
                                <Badge color="secondary" className="badge">!</Badge>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header