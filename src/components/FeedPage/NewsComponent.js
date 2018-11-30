import React from 'react';
import temp from '../../assets/images/first.png';
import temp2 from '../../assets/images/temp2.png';
import news1 from '../../assets/images/news1.png';
import news2 from '../../assets/images/news2.png';
import news3 from '../../assets/images/news3.png';

import "./News.css";
class NewsComponent extends React.Component {

    state = {
        image : [
            temp,
            temp2,
            news1,
            news2,
            news3
        ]
    }

  
    render() {
            let image = this.state.image[this.props.img];

        return(
            <div className="the-feed-main-box">
                <div className="feed-inner-box">
                    <div className="feed-left-img">
                        <img src={image}/>
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
        )
    }
}

export default NewsComponent;