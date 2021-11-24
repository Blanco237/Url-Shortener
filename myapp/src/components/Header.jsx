import React from 'react';
import { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

import classes from '../assets/styles/components/header.module.css';

import { Spin as Harmburger } from 'hamburger-react'


const Header = () => {

    const [isMobile,setIsMobile] = useState(false);
    const [width, setWidth] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const linkStyles = { textDecoration: 'none', color: 'inherit' };

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    });
 

    useEffect(() => {
        setWidth(window.innerWidth);
        if(width<600){
            setIsMobile(true);
        }
        else{
            setIsMobile(false);
        }
        console.log(`${width} : ${isMobile}`);
    },[width]);

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <Link to="/" style={linkStyles}>Goo.Lnk</Link>
            </div>
            <div className={classes.header__message}>
                A simple Url shortener
            </div>
            {isMobile && <div><Harmburger direction="left" toggle={setShowMenu} toggled={showMenu} size={20}/></div>}
            <div className={`${classes.links} ${isMobile? `${classes.mobile}`:""} ${showMenu? `${classes.show}`:""}`}>
                <li><Link to="/login" style={linkStyles}>Login</Link></li>
                <li><Link to="/register" style={linkStyles}>Register</Link></li>
                <li><Link to="/faqs" style={linkStyles}>FAQS</Link></li>
            </div>
        </div>
    )
}

export default Header
