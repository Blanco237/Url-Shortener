import React from 'react'
import { useState } from 'react'

import classes from '../assets/styles/partials/faqitem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Collapsible from 'react-collapsible';


const FaqItem = ({question, answer}) => {

    let trigger = <div className={classes.question}>
                     <div>
                         {question}
                     </div>
                     <div>
                         <FontAwesomeIcon icon={faPlus} transform={{ rotate: 0 }} />
                     </div>
                </div>;

    let triggerWhenOpen = <div className={classes.question}>
    <div>
        {question}
    </div>
    <div>
        <FontAwesomeIcon icon={faPlus} transform={{ rotate: 42 }} />
    </div>
</div>;

    return (
        <div className={classes.item__body}>
            <Collapsible trigger={trigger} triggerWhenOpen={triggerWhenOpen} className={classes.question__bar} openedClassName={classes.question__bar}>
            <div className={`${classes.answer__body}`}>
                   {answer.split(". ").filter((item) => item).map((item,index) => <p key={index}>{item}.</p>)}
             </div>
            </Collapsible>
        </div>
    )
}

export default FaqItem

// <div className={classes.question__bar}>
//                 <div className={classes.question} onClick={() => setShowAnswer(!showAnswer)}>
//                     {question}
//                 </div>
//                 <div>
//                     <FontAwesomeIcon icon={faPlus} transform={{ rotate: 42, duration: '1s' }} />
//                 </div>
//             </div>
//             <div className={`${classes.answer__body} ${showAnswer? `${classes.show}`: ""}`}>
//                     {answer.split(". ").filter((item) => item).map((item,index) => <p key={index}>{item}.</p>)}
//             </div>