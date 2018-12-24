import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const BannerAd = () => {
  return (
      <DFPSlotsProvider dfpNetworkId='21765524922'>
        <div className="desktop-ads">
          <AdSlot sizes={[[728,90], [300, 250]]} adUnit='Test_Banner_Ad' />
        </div>
        <div className="mobile-ads">
          <AdSlot sizes={[[320,50], [300, 50]]} adUnit='Test_Banner_Ad' />
        </div>
        ...
      </DFPSlotsProvider>
  );
};

export default BannerAd;
