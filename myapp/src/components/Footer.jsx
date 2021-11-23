import React from 'react'

import classes from '../assets/styles/components/footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className={classes.footer__logo}>
                    <h4>GooLnk</h4>
                    <p>A simple Url Shortener</p>
                </div>
                <div className={classes.authors}>
                    Developed by <span className={classes.special1}>Blanco</span><br></br>
                    Powered by <span className={classes.special2}><a>RapidAPI</a></span>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
