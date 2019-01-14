import React, { Component } from 'react';
import styles from './ShareIconList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShareIconList extends Component {
  render() {
    let visibility = styles.hide;

    if (this.props.menuVisibility) {
      visibility = styles.show;
    }

    const currentURL = window.location.href;

    return (
        <div onClick={this.props.handleMouseDown} className={styles.socialIcons + ' ' + visibility}>
          <a href={'https://www.facebook.com/sharer/sharer.php?u=' + currentURL}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a href={'https://twitter.com/home?status=' + currentURL}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href={'https://www.linkedin.com/shareArticle?mini=true&url=' + currentURL}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </div>
    )
  }
}

export default ShareIconList;
