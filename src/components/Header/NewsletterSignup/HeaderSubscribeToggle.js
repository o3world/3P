import React from 'react';

import styles from './HeaderSubscribeToggle.module.scss';

const HeaderSubscribeToggle = (props) => {
  let classes = props.className + ' ' + styles.toggle;
  if (props.visible) {
    classes = classes + ' ' + styles.visible;
  }

  return (
      <div className={classes} onClick={props.handleClick}>Subscribe</div>
  )

};

export default HeaderSubscribeToggle;