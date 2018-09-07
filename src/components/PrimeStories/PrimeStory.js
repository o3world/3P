import React from 'react';
import './PrimeStory.css';

const PrimeStory = (props) => {
    let indexClass = "";
    switch(props.index) {
        case 0:
            indexClass = " prime-story--hero";
            break;
        case 1:
            indexClass = " prime-story--wide";
            break;
        default:
    }
    return (
    <div className={"prime-story" + indexClass}>
        <h3 className="prime-story__name">{props.title}</h3>
        <p className="author">{props.author_name}</p>
        <p className="category">{props.category_name}</p>
        <time>{props.date}</time>
    </div>
    );
};


export default PrimeStory;