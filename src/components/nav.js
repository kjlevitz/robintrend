import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const nav = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="index">HomeImage</Navbar.Brand>
                
                <Nav className="mr-auto">
                    <Nav.Link href="trends">Trends</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
               
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            
            </Navbar>
        </div>

    );


}

export default nav;