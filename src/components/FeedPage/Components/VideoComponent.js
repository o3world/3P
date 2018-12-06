import React from 'react';
import "../CSS/Video.css";
import Video from './Video';
import video1 from '../../assets/images/video1.png';
import video2 from '../../assets/images/video2.png';
import video3 from '../../assets/images/video3.png';

class VideoComponent extends React.Component {

    state = {
        img : [
            video1,
            video2,
            video3
        ]
    }
    render() {
        return(
            <div className="video-section">
                <div className="specific-title">
                    <h3>VIDEOS</h3>
                </div>
                <div className="video-inner-boxes">
                    <Video videoImage={video1} videoTitle="The Corporate Responsibility Summer Must-Read for the C-Suite"/>
                    <Video videoImage={video2} videoTitle="The Corporate Responsibility Summer Must-Read for the C-Suite"/>
                    <Video videoImage={video3} videoTitle="The Corporate Responsibility Summer Must-Read for the C-Suite"/>
                </div>
            </div>
        )
    }
}

export default VideoComponent;