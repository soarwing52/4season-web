import React, { useEffect } from 'react'
import { Button, Navbar } from 'react-bootstrap';
import { ImgLogo } from '../style/images';
import './Navbar.scss';
import { UserIsLoggedIn, Logout, PageWithoutAuthorization } from '../Authentication/UserStatus';


const NavBar = () => {
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

        checkUserStatus()
    }, []);
    return (
        <div className='l-grid-menu-layout__navi'>
        <Navbar className='main-navbar'>
            <div className='navbar-container' id="navbar-container">
                <div className=" d-flex">
                    <img src={ImgLogo} alt="logo" height="35" />
                    <a href="#navbar-container" className="navbar-title">桃園市橋梁安全管理系統</a>
                </div>
                <div className=" d-flex">
                    <Button className="logout-btn" onClick={LogoutButton}>
                        <p>登出</p>
                    </Button>

                </div>

            </div>
        </Navbar>
        </div>
    )
}

export default NavBar;