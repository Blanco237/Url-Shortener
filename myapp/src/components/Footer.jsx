import React from 'react'

import classes from '../assets/styles/components/footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className={classes.footer__logo}>
                    <h4>Randly</h4>
                    <p>A simple Url Shortener</p>
                </div>
                <div className={classes.authors}>
                    Developed by <a href='https://github.com/Blanco237' target="_blank" className={classes.special1}>Blanco</a><br></br>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
