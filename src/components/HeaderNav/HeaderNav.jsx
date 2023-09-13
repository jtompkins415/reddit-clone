import { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import './HeaderNav.css';


function HeaderNav({currUser}) {

    return (
        <>
           <Navbar className="navbar-container">
                 <div className="navbar-content">
                    <div className="navbar-title-container">
                        <NavbarBrand className="navbar-title">Reddat.</NavbarBrand>
                    </div>
                    <Nav className="nav-container">
                        <NavItem className="navitem">
                            {currUser ? <NavLink href="/userLogout" className="navlink user-auth">User Logout</NavLink> : <NavLink href="/userLogin" className="navlink user-auth">User Login</NavLink>} 
                        </NavItem>
                        {currUser ? 
                        <NavItem className="navitem">
                            <NavLink href="/userProfile" className="navlink user-profile">User Profile</NavLink>
                        </NavItem> : null}
                        <NavItem className="navitem">
                            <NavLink href="/about" className="navlink about-link">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </div>
           </Navbar>
        </>
    )
};

export default HeaderNav;