import React from 'react';
import "./HomeForum.css";

import forum_background from '../../assets/images/forum_stock.png';

const HomeForum = () => {
  const homeForumStyle = {
    backgroundImage: `url(${forum_background})`
  };
    return (
        <div className={'home-forum__wrapper'} style={homeForumStyle}>
          <div className={'forum_meta-container'}>
            <div className={'forum_tag'}>3BL Forum</div>
            <h3 className={'forum_title'}>Join the Event that Matters</h3>
          </div>
        </div>
    )
};

export default HomeForum;