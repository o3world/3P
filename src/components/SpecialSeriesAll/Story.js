import React from "react";
import './Story.css';

const Story = (props) => {
    return (
        <div className={props.bgImage}>
            <a href="#" className="article-inner-box">
                <div className="title-article">
                    <h4>{props.title}</h4>
                </div>
                <div className="publication-name"></div>
            </a>
        </div>
    )
}

export default Story;