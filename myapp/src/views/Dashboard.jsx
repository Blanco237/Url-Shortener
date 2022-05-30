import React,{ useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserProvider'

import LinkItem from '../partials/linkItem'

import classes from '../assets/styles/views/dash.module.css';

import data from '../testData'
import thumb from '../assets/images/thumb.jpg'
import { getUserData } from '../firebaseUtils';

const Dashboard = () => {

    const { user } = useContext(UserContext);
    const [userData, setUserData] = useState(null);

    useEffect(async () => {
        console.log("Running Fetch")
        if(user){
            console.log('Fetching Data')
            let data = await getUserData(user);
            console.log("User Data: ", data);
            setUserData(data);
        }
        else{
            setUserData({}); 
        }
    }, [user]);

    if(!user){
        return <center height="100vh"><h1>No User</h1></center>
    }

    return (
            <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.user__details}>
                    <div className={classes.user__details__img}>
                        <img src={thumb}></img>
                    </div>
                    <div className={classes.user__details__data}>
                        <h5>Name: </h5><p>{userData.username}</p>
                        <h5>Email: </h5><p>{userData.email}</p>
                        <h5>Company: </h5><p>{userData.company}</p>
                        <h5>Position: </h5><p>{userData.position}</p>
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
