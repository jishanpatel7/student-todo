import React from 'react'
import { Nav, NavbarContianer,NavLogo,NavIcon } from './Navbar.element';


const Navbar = () => {
  return (
      <>
        <Nav>
       <NavbarContianer>
<NavLogo to="/">
<NavIcon>
    ULTRA
</NavIcon>
    </NavLogo>

         </NavbarContianer>
        </Nav>
   
    </>
  )
}

export default Navbar;