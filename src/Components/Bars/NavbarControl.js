import React from "react";
import { Outlet } from 'react-router';
import NavBar from './NavBar';

const WithNavbar = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

const WithoutNavbar = () => <Outlet />

const WithSidebar = () => {
    return (
        <div className="l-grid-menu-layout">
            <NavBar />
            <Outlet />
        </div>
    )
}


export { WithoutNavbar, WithNavbar, WithSidebar };