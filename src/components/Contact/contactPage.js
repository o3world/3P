import React from 'react';
import VideoComponent from './videoComponent';
import temp from '/home/geeta/Desktop/3P/src/assets/images/assoc_stock.png';

import "./Contact.css";
class contactPage extends React.Component {
  
    render() {

        return(
            <React.Fragment>
            <div className="the-feed-main-box">
                <div className="page-title">
                    <h3 className="main-title">The Feed</h3>
                    <span className="title-info">Latest News from Leaders in Corporate Social Responsibility</span>
                </div>
                <div className="feed-inner-box">
                    <div className="feed-left-img">
                        <img src={temp}/>
                    </div>
                    <div className="feed-right-content">
                        <ul>
                            <li className="text-left">
                                ENERGY
                            </li>
                            <li className="text-right">
                                JUN 26
                            </li>
                        </ul>
                        <div className="feed-right-title-box">
                            <h4 className="feed-right-title">Title lorem ipsum dolor sit amet</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui </p>
                        </div>
                        <div className="feed-author-box">
                            <p  className="author-name">Proctor & Gambel</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <VideoComponent />
            </div>
            </React.Fragment>
            
        )
    }
}

export default contactPage;