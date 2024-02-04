import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BiSun, BiMoon, BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";


const Header = () => {

  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar collapseOnSelect expand="md"

      className='bg-light border-bottom'
      style={{ width: '100%', position: 'fixed', zIndex: 100 }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand className='text-light-primary'>
            <b>Simple-ecart</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-around  align-items-center ">
            <Link to="sign-in" className='nav-link text-light-primary'>
              Sign in
            </Link>

            <Link
              to="/cart"
              className='text-light-primary d-flex align-items-center mx-3'
            >
              <BiCart size="2rem" />
              {!isEmpty && <span style={{ position: 'relative', right: '10px', top: '-8px',fontSize:'14px',display:'grid',placeItems:'center',backgroundColor:'red',width:'1.2rem',height:'1.2rem',borderRadius:'50%',color:'white',textDecoration:'none' }}>{totalItems}</span>}
              {/* <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span> */}
            </Link>
            <Link to="/my-account" className='nav-link text-light-primary'>
              <VscAccount size="1.8rem" />
              &nbsp;My Account
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;