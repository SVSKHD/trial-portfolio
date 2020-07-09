import React,{useState} from 'react'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import {FaAngleDoubleDown,FaIdCardAlt} from "react-icons/fa"

export default function HeadNav() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
        <Navbar>
        <NavbarBrand href="/" className="mr-auto">Tech-inside</NavbarBrand>
        <Button outline color="success" onClick={toggleNavbar}><FaAngleDoubleDown size={28} /></Button>
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
        <NavItem>
              <NavLink><h5><FaIdCardAlt size={28}/> Contact us</h5></NavLink>
        </NavItem>
        <NavItem>
            <NavLink><h5>Briefly about us</h5></NavLink>
        </NavItem>
        </Nav>
        </Collapse>
        </Navbar>
        </div>
    )
}
