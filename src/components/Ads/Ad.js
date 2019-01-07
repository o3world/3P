import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

import styles from './Ad.module.scss';

const Ad = (props) =>
  <DFPSlotsProvider dfpNetworkId='21765524922' autoLoad={ true } collapseEmptyDivs={ true } sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90]]}, {viewport: [0,0], sizes:[[320, 50]] }] }>
    <div className={styles.ad}>
      <AdSlot sizes={[[728,90], [320,50]]} adUnit={props.adUnit}/>
    </div>
  </DFPSlotsProvider>;

export default Ad;