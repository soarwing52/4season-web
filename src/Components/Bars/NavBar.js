import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { UserIsLoggedIn, Logout, PageWithoutAuthorization } from '../Authentication/UserStatus';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    const home = window.location.origin;
    function IsUnathorizedPage() {
        let pathOnly = window.location.pathname.replace(`${process.env.PUBLIC_URL}/`, "")
        return PageWithoutAuthorization.includes(pathOnly);
    }

    const LogoutButton = () => {
        Logout();
        window.location.href = './Login';
    }

    useEffect(() => {
        function checkUserStatus() {
            if (!UserIsLoggedIn() && !IsUnathorizedPage()) {
                window.location.href = './Login'
            }
        }

        // checkUserStatus()
    }, []);
    return (
        <div className="col-md-9 col-sm-7">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href={`${home}/Camp/List`} >Camps</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html"> Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="service.html">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="team.html">team </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="client.html">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html"> contact us </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default NavigationBar;