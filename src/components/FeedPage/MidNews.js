import React from 'react';
import "./MidNews.css";

const MidNews = (props) => {
    let objFeed = props.data;
    return (
        <div className="news-box">
            <div >
                <div>
                    <div className="news-box-heading">
                        <p id="title">{objFeed.category}</p>
                        <p id="date">{objFeed.date}</p>
                    </div>
                    <div>
                        <h4 className="news-box-title">{objFeed.title}</h4>
                        <p className="news-box-description">{objFeed.description}</p>
                    </div>
                    <div>
                        <p className="news-box-company">{objFeed.author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidNews;