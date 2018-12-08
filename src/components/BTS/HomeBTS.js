import React from 'react';
import "./HomeBTS.css";

import bts_background from '../../assets/images/bts_background.png';

const HomeBTS = () => {
  const homeBTSStyle = {
    backgroundImage: `url(${bts_background})`
  };
    return (
        <div className={'home-bts__wrapper'} style={homeBTSStyle}>
          <div className={'bts_content-wrapper'}>
            <div className={'bts_date-wrapper'}>
            <h4>Weekly Newsletter</h4>
              <time className={'bts_publication-date'}>Oct 18</time>
            </div>
            <h3 className={'bts_title'}>Morality Play: Taking Stands in the Saudi Crisis</h3>
            <p className={'bts_author'}>Words by John Howell</p>
          </div>
          <button className={'bts_subscribe-button'}>Subscribe</button>
        </div>
    )
};

export default HomeBTS;