import React from 'react'



import FaqItem from '../partials/FaqItem';
import classes from '../assets/styles/views/faq.module.css';


import data from '../faqs';


const Faq = () => {
    return (
        <div className={classes.body}>
            <div className={classes.faqs}>
                <h3>Frequently Asked Questions</h3>
                { data.map((item,index) => {
                    return <FaqItem question={item.question} answer={item.answer} key={index} />
                })
                }
            </div>
            <div className={classes.others}>

            </div>
        </div>
    )
}

export default Faq
