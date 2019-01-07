import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp'; //https://github.com/jaanauati/react-dfp/

//creates basic banner ad
const Ad = (props) => {
  return (
      <DFPSlotsProvider dfpNetworkId='21765524922' autoLoad={ true } collapseEmptyDivs={ true } sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90]]}, {viewport: [414, 896], sizes:[[320, 50]] }] }>
        <div className="desktop-ads">
          <AdSlot sizes={[[728,90], [320,50]]} adUnit={props.adUnit}/> //ad unit must match google ad manager code name
        </div>
      </DFPSlotsProvider>
  );
};

export default Ad;
