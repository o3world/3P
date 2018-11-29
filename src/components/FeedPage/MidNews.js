import React from 'react';
import "./MidNews.css";

class MidNews extends React.Component {

    render() {

        return (
            <div className="news-box">
                <div >
                    <div>
                        <div className="news-box-heading">
                            <p id="title">Diversity & Inclusion</p>
                            <p id="date">Jun 26</p>
                        </div>
                        <div>
                            <h4 className="news-box-title">How Company Harness Power Of Trees To Advance Their Sustainability Goals and Bottom Lines</h4>
                            <p className="news-box-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                        </div>
                        <div>
                            <p className="news-box-company">Proctor & Gambel</p>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default MidNews;