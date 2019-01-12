import React, { Component } from 'react';
import styles from './ShareButton.module.scss';

class ShareButton extends Component {
  render() {
    return (
        <div id={'shareButton'} className={styles.bars} onClick={this.props.handleMouseDown}>Share</div>
    )
  }
}

export default ShareButton;
