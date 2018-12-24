import React from 'react';
import ReactDom from 'react-dom';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const BannerAd = () => {
  <DFPSlotsProvider dfpNetworkId='21765524922' targetingArguments={ {'customKw': 'test'} }
                sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90], [300, 250]]},
                                {viewport: [900, 768], sizes:[[300, 250]] }] }>
    <div className="desktop-ads">
      <AdSlot sizes={[[728,90], [300, 250]]} adUnit='Test_Banner_Ad' />
    </div>
    <div className="mobile-ads">
      <AdSlot sizes={[[320,50], [300, 50]]} adUnit='Test_Banner_Ad' />
    </div>
    ...
  </DFPSlotsProvider>
}

export default BannerAd;
