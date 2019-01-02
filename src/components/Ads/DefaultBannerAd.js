import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

//creates basic banner ad
const DefaultBannerAd = () => {
  return (
      <DFPSlotsProvider dfpNetworkId='21765524922' autoLoad={ true } collapseEmptyDivs={ true } sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90]]}, {viewport: [414, 896], sizes:[[320, 50]] }] }>
        <div className="desktop-ads">
          <AdSlot sizes={[[728,90], [320,50]]} adUnit='Default_Banner_Ad' />
        </div>
      </DFPSlotsProvider>
  );
};

export default DefaultBannerAd;
