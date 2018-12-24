import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const BannerAd = () => {
  return (
      <DFPSlotsProvider dfpNetworkId='21765524922' sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90]]}, {viewport: [900, 768], sizes:[[728, 90]] }] }>
        <div className="desktop-ads">
          <AdSlot sizes={[[728,90]]} adUnit='Test_Banner_Ad' />
        </div>
        <div className="mobile-ads">
          <AdSlot sizes={[[320,50]]} adUnit='Test_Banner_Ad' />
        </div>
        ...
      </DFPSlotsProvider>
  );
};

export default BannerAd;
