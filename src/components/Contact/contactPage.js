import React from 'react';
import "./Contact.css";
class contactPage extends React.Component {

    render() {

        return(
            <div className="the-feed-main-box">
                <div className="page-title">
                    <h3 className="main-title">The Feed</h3>
                    <span className="title-info">Latest News from Leaders in Corporate Social Responsibility</span>
                </div>
                <div className="feed-inner-box">
                    <div className="feed-left-img">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

export default contactPage;