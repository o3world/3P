import React, { Component } from 'react';
import styles from './LoadingSpinner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LoadingSpinner extends Component {
  render() {
    return (
      <div className={styles.spinner}>
        <p>Loading the feed</p>
        <FontAwesomeIcon icon="spinner" spin/>
      </div>
    )
  }
}


export default LoadingSpinner;
