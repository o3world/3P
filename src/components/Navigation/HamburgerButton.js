import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HamburgerButton.module.scss';

class HamburgerButton extends Component {
  render() {
    return (
        <div id={'hamburgerButton'} className={styles.bars} onClick={this.props.handleMouseDown}><FontAwesomeIcon icon={"bars"} /></div>
    )
  }
}

export default HamburgerButton;