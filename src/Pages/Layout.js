import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import FooterNew from '../components/FooterNew';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <FooterNew/>
        </div>
    );
}

export default Layout;
