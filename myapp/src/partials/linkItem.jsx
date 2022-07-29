import React from 'react'

import classes from '../assets/styles/partials/linkItem.module.css';

const LinkItem = ({ item }) => {
    return (
        <div className={classes.linkItem}>
            <p className={classes.linkP}><span>Long Link: </span>{item.longLink}</p>
            <p className={classes.linkP}><span>Short Link: </span><a href={item.shortLink}>{item.shortLink}</a>
            <button>Copy</button></p>
        </div>
    )
}

export default LinkItem
