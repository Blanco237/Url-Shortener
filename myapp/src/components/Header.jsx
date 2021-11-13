import React from 'react'

import classes from '../assets/styles/components/header.module.css';

const Header = () => {
    return (
        <div className={classes.headerBody}>
            <div  className={classes.logo}>
                SafeLearning
            </div>
            <div className={classes.menuContainer}>
                <ul className={classes.menu}>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={classes.search}>
                <input type="search" placeholder="Search Courses" />
            </div>
        </div>
    )
}

export default Header
