import React, { useEffect, useState, useContext } from 'react'
import { Button, NavLink } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserIsLoggedIn, Logout, PageWithoutAuthorization, GetUser } from '../Authentication/UserStatus';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ImgLogo } from "Style/images"
import { userContext } from "Components/Authentication/userContext";

const NavigationBar = () => {
    const history = useNavigate();
    const [user, setUser] = useContext(userContext);

    const home = window.location.origin;
    function IsUnathorizedPage() {
        let pathOnly = window.location.pathname.replace(`${process.env.PUBLIC_URL}/`, "")
        return PageWithoutAuthorization.includes(pathOnly);
    }

    const LogoutButton = () => {
        Logout();
        history('/Home')
    }

    const Login = () => {
        history('User/Login')
    }

    const UserStatus = () => {
        if (user.name) {
            return (
                <>
                    <Navbar.Text>
                        <p style={{ marginLeft: 'auto', marginRight: 0 }}>歡迎！ 會員：{user.name}</p>
                    </Navbar.Text>
                    <Button onClick={Logout}>登出</Button>
                </>
            )
        }
        else {
            return (
                <>
                    <Button onClick={Login}>登入</Button>
                </>
            )
        }
    }

    useEffect(() => {
        function checkUserStatus() {
            if (!UserIsLoggedIn() && !IsUnathorizedPage()) {
                window.location.href = './Login'
            }
        }
        // console.log('log status', UserIsLoggedIn())

        setUser(GetUser());
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
                                        秘書長
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        財務
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href={`${home}/Finance/PaymentList`}>
                                        匯款確認
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        領隊
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href={`${home}/Camp/List`} >
                                        總務
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            {UserStatus()}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div >
        </div >
    )
}

export default NavigationBar;