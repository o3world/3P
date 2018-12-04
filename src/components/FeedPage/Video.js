import React from 'react';
import "./Video.css";

const VideoRecord = (props) => {
    return(
        <div className="video-box">
            <img src={props.videoImage}/>
            <div className="video-info">
                <h3>{props.videoTitle}</h3>
            </div>
        </div>
    )
}


export default VideoRecord;