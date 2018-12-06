import React from "react";
import './Story.css';
import whiteImg from './images/poona-gadgil-white.png';
import blackImg from './images/poona-gadgil-black.png';
const Story = (props) => {
    return (
        <div className={props.bgImage} id="story-block">

            <a href="#" className="article-inner-box">
                <div className="inner-img">
                    <img src="https://imgix.bustle.com/rehost/2016/9/13/a053850b-2865-48d2-b66b-9dbe1eae9367.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70"/>
                </div>
                <div className="title-article">
                    <h4>{props.title}</h4>
                </div>
                <div className="publication-name">
                    <img class="white-img" src={whiteImg}/>
                    <img class="black-img"  src={blackImg}/>
                </div>
            </a>
        </div>
    )
}

export default Story;