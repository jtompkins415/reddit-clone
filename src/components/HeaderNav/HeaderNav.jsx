import { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import './HeaderNav.css';


function HeaderNav({currUser}) {

    return (
        <>
           <Navbar className="navbar-container">
                 <div className="navbar-content">
                    <div className="navbar-title-container">
                        <NavbarBrand className="navbar-title">REDDITCLONE</NavbarBrand>
                    </div>
                    <Nav className="nav-container">
                        <NavItem className="navitem">
                            {currUser ? <NavLink href="/userLogout" className="navlink">User Logout</NavLink> : <NavLink href="/userLogin" className="navlink">User Login</NavLink>} 
                        </NavItem>
                        {currUser ? 
                        <NavItem className="navitem">
                            <NavLink href="/userProfile" className="navlink">User Profile</NavLink>
                        </NavItem> : null}
                        <NavItem className="navitem">
                            <NavLink href="/about" className="navlink">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </div>
           </Navbar>
        </>
    )
};

export default HeaderNav;