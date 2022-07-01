import React from 'react'
import logo from "./logo.png"
import {Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'
function navbar() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundImage: `linear-gradient(to right,transparent,#161853)`}}>
        <a className="me-2" href="home"><img src={logo} style={{width:'6rem', borderRadius:'50%'}}></img></a>
          <p className="head display-4">Sapphires</p>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav "  style={{justifyContent:'space-between'}}>
            <Nav className='w-100 ms-3 me-3'>
                <ul className="navbar-nav navbar-collapse ms-3 w-100 mb-lg-0" style={{justifyContent:'space-between'}} >
        <li className="nav-item ">
          <Link className="nav-link active text-light me-3 navt" to="home" style={{fontSize:'1.4rem'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light me-3  navt" to="rooms" style={{fontSize:'1.4rem'}}>Rooms</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light  me-3  navt" to="cusines" style={{fontSize:'1.4rem'}}>Cusine</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light  me-3 navt" to="events" style={{fontSize:'1.4rem'}}>Events</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light  me-3 navt" to="signup" style={{fontSize:'1.4rem'}}>Login/Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light navt" to="aboutus" style={{fontSize:'1.4rem'}}>About us</Link>
        </li>
      </ul>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navbar