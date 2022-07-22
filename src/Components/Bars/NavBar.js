import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { UserIsLoggedIn, Logout, PageWithoutAuthorization } from '../Authentication/UserStatus';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ImgLogo } from "Style/images"

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
        <div className="header_bo">
            <div className="col-md-12 col-sm-7">
                <Navbar expand="lg" variant="navigation navbar navbar-expand-md" sticky="top">
                    <Container>
                        <Navbar.Brand href={home}>
                            <img src={ImgLogo} alt="logo" height="90" />台灣四季溯溪協會
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href={`${home}/User/Login`}>登入</Nav.Link>
                                <NavDropdown title="行程報名" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">
                                        活動報名
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href={`${home}/Camp/List`} >
                                        營隊報名
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="幹部群組" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">
                                        財務
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        領隊
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href={`${home}/Camp/List`} >
                                        總務
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        </div>
    )
}

export default NavigationBar;