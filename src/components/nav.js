import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import redirectSymbol from "./SearchSymbol";


//import Link from 'next/link' <-- use for JSX compatibility
//<link href="/index" passHref><Nav.Link>text</Nav.Link></Link>

const nav = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="/index">
                    <img src="../media/images/home.png" width="30" height="30" class="d-inline-block align-top" alt="HomeImage"/>
                    Home
                </Navbar.Brand>

                
                <Nav className="mr-auto">
                    <Nav.Link href="/trends">Trends</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
               

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" id="symbol" name ="symbol"/>
                    <Button type="submit" variant="outline-info" onclick={redirectSymbol()} >Search</Button>
                </Form>


            
            </Navbar>
        </div>

    );


};

export default nav;