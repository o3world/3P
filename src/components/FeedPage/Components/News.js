import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import "../CSS/News.css";

const News = (props) => {
    let objFeed = props.data;
    let description = ReactHtmlParser(objFeed.body)[0].props.children[0];
    
    return(
        <div className="the-feed-main-box">
            <div className="feed-inner-box">
                <div className="feed-left-img">
                    <img src={objFeed.image} style={{"height":"226px"}}/>
                </div>
                <div className="feed-right-content">
                    <ul>
                        <li className="text-left">
                            {/* {objFeed.category} */} ENERGY
                        </li>
                        <li className="text-right">
                            { moment(objFeed.date).format("MMM D").toUpperCase()}
                        </li>
                    </ul>
                    <div className="feed-right-title-box">
                        <h4 className="feed-right-title">{objFeed.title}</h4>
                        <p>{ description.slice(0,200) }</p>
                    </div>
                    <div className="feed-author-box">
                        {/* <p  className="author-name">{objFeed.author}</p> */}
                        <p  className="author-name">Proctor & Gamble</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;