import React,{ useContext, useState } from 'react'
import { UserContext } from '../UserProvider'

import LinkItem from '../partials/linkItem'

import classes from '../assets/styles/views/dash.module.css';

import data from '../testData'
import thumb from '../assets/images/thumb.jpg'

const Dashboard = () => {

    const user = useContext(UserContext);

    return (
            <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.user__details}>
                    <div className={classes.user__details__img}>
                        <img src={thumb}></img>
                    </div>
                    <div className={classes.user__details__data}>
                        <h5>Name: </h5><p>{user.name}</p>
                        <h5>Email: </h5><p>{user.email}</p>
                        <h5>Company: </h5><p>{user.company}</p>
                        <h5>Position: </h5><p>{user.position}</p>
                        <h5>Number of Links: </h5><p>{data.length.toString()}</p> 
                    </div>
                </div>
                <div className={classes.links}>
                    <h3>Your Links</h3>
                    { data.map((item,index) => {
                         return <LinkItem item={item} key={index} />
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
