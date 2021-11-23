import React from 'react';
import { useState, useEffect }  from 'react';
import classes from '../assets/styles/components/header.module.css';


const Header = () => {

    const [isMobile,setIsMobile] = useState(false);
    const [width, setWidth] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    // window.addEventListener("resize", () => {
    //     if(window.outerWidth<600){
    //         setIsMobile(true);
    //     }
    //     else{
    //         setIsMobile(false);
    //     }
    //     console.log(`${window.outerWidth} : ${isMobile}`);
    // });

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    })

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
                Goo.Lnk
            </div>
            <div className={classes.header__message}>
                A simple Url shortener
            </div>
            {isMobile && <div onClick={() => setShowMenu(!showMenu)}>MENU</div>}
            <div className={`${classes.links} ${isMobile? `${classes.mobile}`:""} ${showMenu? `${classes.show}`:""}`}>
                <li>Login</li>
                <li>Register</li>
                <li>FAQS</li>
            </div>
        </div>
    )
}

export default Header
