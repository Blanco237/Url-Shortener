import React from 'react'

import classes from '../assets/styles/views/home.module.css';

import shortLink from '../assets/images/link_shortener.svg';
import fileImg from '../assets/images/file_bundles.svg';
import charts from '../assets/images/charts.svg';

import data from '../testData';
import LinkItem from '../partials/linkItem';

const Home = () => {
    return (
        <div className={classes.body}>
            <div className={classes.banner}>
                <div className={classes.banner__message}>
                    <p>Goo.Lnk is a easy and interactive platform for <br/>the shortening of links</p>
                    <button className={classes.banner__button}>Get Started</button>
                </div>
                <div className={classes.banner__img}>
                    <img src={shortLink} alt="banner" />
                </div>
            </div>
            <div className={classes.input}>
                <p>
                    Enter the link below to shorten<br></br>
                    <span>&#8650;</span>
                </p>
                <div className={classes.input__section}>
                    <input placeholder="Shorten Link" name="link" className={classes.input__link} type="text" />
                    <button className={classes.input__button}>Shorten Link</button>
                    <div className={classes.previous__links}>
                            { data.map((item,index) => {
                                return <LinkItem item={item} key={index} />
                            }) }
                    </div>
                </div>
            </div>
            <div className={classes.createAccount}>
                <div className={classes.createAccount__left}>
                    <img src={fileImg} alt="account" />
                </div>
                <div className={classes.createAccount__right} >
                    <h4>Sync and Manage all your links</h4>
                    <p>With the GooLink url shortener, you can keep track of all your short links and long links right from your user dashboard.</p>
                    <button className={classes.createAccount__button}>Create Account &#8594;</button>
                </div>
            </div>
            <div className={classes.analytics} >
                    <div className={classes.analytics__left}>
                        <h4>Get Analytics on Your Links</h4>
                        <p>With the GooLink API, you are also provided with comprehensive analytics (Charts, Graphs, Tables) on user interaction with your links.</p>
                        <button className={classes.disabled} >Coming Soon...</button>
                    </div>
                    <div className={classes.analytics__right} >
                            <img src={charts} alt="charts" />
                    </div>
                </div>
        </div>
    )
}

export default Home
