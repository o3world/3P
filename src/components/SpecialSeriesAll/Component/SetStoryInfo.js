import React from "react";
import '../CSS/Story.css';

const StoryInfo = (props) => {
    const story = props.data;
    const logo = (story.logo != null) ? story.logo.url: "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png"
    return (
        <div id="story-block" className="article-box">
            <a href="#" className="article-inner-box">
                <div className="inner-img">
                    <img src="https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg?auto=compress&cs=tinysrgb&h=350"/>
                </div>
                <div className="title-article">
                    <h4>{story.name}</h4>
                </div>
                <div className="words-by">
                    <span>Words by John Howell</span>
                </div>
            </a>
        </div>);
};

export default StoryInfo;