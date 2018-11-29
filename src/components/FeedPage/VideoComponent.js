import React from 'react';
import "./Video.css";
import video1 from '/home/abhishek/Desktop/3P/src/assets/images/video1.png';
import video2 from '/home/abhishek/Desktop/3P/src/assets/images/video2.png';
import video3 from '/home/abhishek/Desktop/3P/src/assets/images/video3.png';

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
                    <div className="video-box">
                        <img src={video1}/>
                        <div className="video-info">
                            <h3>The Corporate Responsibility Summer Must-Read for the C-Suite</h3>
                        </div>
                    </div>
                    <div className="video-box">
                        <img src={video2}/>
                        <div className="video-info">
                            <h3>The Corporate Responsibility Summer Must-Read for the C-Suite</h3>
                        </div>
                    </div>
                    <div className="video-box">
                        <img src={video3}/>
                        <div className="video-info">
                            <h3>The Corporate Responsibility Summer Must-Read for the C-Suite</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoComponent;