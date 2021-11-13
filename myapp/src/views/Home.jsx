import React from 'react'

import classes from '../assets/styles/views/home.module.css'

import icon1 from '../assets/images/icon-api.svg'
import icon2 from '../assets/images/icon-onboarding.svg'
import icon3 from '../assets/images/icon-budgeting.svg'

const Home = () => {
    return (
        <div className={classes.body}>
            <div className={classes.bannerBody}>
                <div className={classes.title}>
                    <h3>
                        Stay Safe
                    </h3>
                    <p>
                        Keep Learning
                    </p>
                    <button className={classes.titleButton}>
                        View Courses
                    </button>
                </div>
                <div className={classes.message}>
                    You are Braver than you believe<br/>
                    Stronger than you seem and<br/>
                    Smarter than you think<br/>
                </div>
            </div>
            <div className={classes.info} >
                <div className={classes.infoTitle} >
                    <h3>What is Safe Learning?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laudantium possimus earum tempora molestias incidunt optio numquam aut voluptatibus consectetur necessitatibus neque omnis veritatis est id cupiditate autem dolores voluptates!</p>
                </div>
                <div className={classes.infoElements}>
                    <div className={classes.infoElement}>
                        <div>
                            <img src={icon1} />
                        </div>
                        <div>
                            <h4>Easy To Understand</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas molestias. Magnam mollitia rem in dolorem optio perspiciatis ut enim earum quaerat, at aut eveniet accusantium. Eos ea praesentium exercitationem.</p>
                        </div>
                    </div>
                    <div className={classes.infoElement}>
                        <div>
                            <img src={icon2} />
                        </div>
                        <div>
                            <h4>Reliable Lecturers</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas molestias. Magnam mollitia rem in dolorem optio perspiciatis ut enim earum quaerat, at aut eveniet accusantium. Eos ea praesentium exercitationem.</p>
                        </div>
                    </div>
                    <div className={classes.infoElement}>
                        <div>
                            <img src={icon3} />
                        </div>
                        <div>
                            <h4>Downloadable Lectures</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas molestias. Magnam mollitia rem in dolorem optio perspiciatis ut enim earum quaerat, at aut eveniet accusantium. Eos ea praesentium exercitationem.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.dataBody} >
                    <div className={classes.dataTitle}>
                        <h3>Safe Learning Has</h3>
                    </div>
                    <div className={classes.dataElements}>
                        <div className={classes.dataElement}>
                            Reached<br></br>
                            <h4>30M</h4>
                            Students
                        </div>
                        <div className={classes.dataElement}>
                            Over<br></br>
                            <h4>50M+</h4>
                            Lecture Videos
                        </div>
                        <div className={classes.dataElement}>
                            Over<br></br>
                            <h4>500</h4>
                            Course Supervisors
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
