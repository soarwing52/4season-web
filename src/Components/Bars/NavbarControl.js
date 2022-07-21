import React from "react";
import { Outlet } from 'react-router';
import NavigationBar from './NavBar';

const WithNavbar = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

const WithoutNavbar = () => <Outlet />

const WithSidebar = () => {
    return (
        <div className="l-grid-menu-layout">
            <NavigationBar />
            <Outlet />
        </div>
    )
}


export { WithoutNavbar, WithNavbar, WithSidebar };