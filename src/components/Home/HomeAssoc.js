import React from 'react';
import "./HomeAssoc.css";

import assoc_background from '../../assets/images/assoc_stock.png';

const HomeAssoc = () => {
  const homeAssocStyle = {
    backgroundImage: `url(${assoc_background})`
  };
    return (
        <div className={'home-assoc__wrapper'} style={homeAssocStyle}>
          <div className={'assoc_meta-container'}>
            <div className={'assoc_tag'}>3BL Association</div>
            <h3 className={'assoc_title'}>Bringing Leaders Together</h3>
          </div>
        </div>
    )
};

export default HomeAssoc;