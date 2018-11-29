import React from 'react';
import temp from '/home/geeta/Desktop/3P/src/assets/images/assoc_stock.png';
import "./Video.css";

class VideoComponent extends React.Component {

    render() {

        return(
            <div className="video-section">
                <div className="specific-title">
                    <h3>VIDEOS</h3>
                </div>
                <div className="video-inner-boxes">
                    <div className="video-box">
                        <img src={temp}/>
                        <div className="video-info">
                            <h3>The Corporate Responsibility Summer Must-Read for the C-Suite</h3>
                        </div>
                    </div>
                    <div className="video-box">
                        <img src={temp}/>
                        <div className="video-info">
                            <h3>The Corporate Responsibility Summer Must-Read for the C-Suite</h3>
                        </div>
                    </div>
                    <div className="video-box">
                        <img src={temp}/>
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