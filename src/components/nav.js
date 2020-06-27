import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const nav = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">HomeImage</Navbar.Brand>
                
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Trends</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
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