import React, { Component } from 'react';
import styles from './ShareIconList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShareIconList extends Component {
  render() {
    let visibility = styles.hide;

    if (this.props.menuVisibility) {
      visibility = styles.show;
    }

    return (
        <div onClick={this.props.handleMouseDown} className={styles.socialIcons + ' ' + visibility}>
          <a target='_blank' rel="noopener noreferrer" href={'https://www.facebook.com/share.php?t=' + this.props.url}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a target='_blank' rel="noopener noreferrer" href={'https://twitter.com/intent/tweet?url=' + this.props.url}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a target='_blank' rel="noopener noreferrer" href={'https://www.linkedin.com/shareArticle?mini=true&url=' + this.props.url}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </div>
    )
  }
}

export default ShareIconList;
