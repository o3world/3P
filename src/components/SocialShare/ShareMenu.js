import React, { Component } from 'react';
import styles from './ShareMenu.module.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShareMenu extends Component {
  render() {
    let visibility = styles.hide;

    if (this.props.menuVisibility) {
      visibility = styles.show;
    }

    return (
        <div onClick={this.props.handleMouseDown} className={styles.menu + ' ' + visibility}>
          <nav className={styles.navList}>
            <Link to={'/'}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Link>
            <Link to={'/stories'}><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
            <Link to={'/sponsored-series'}><FontAwesomeIcon icon={['fab', 'google']} /></Link>
            <Link to={'/the-feed'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></Link>
          </nav>
        </div>
    )
  }
}

export default ShareMenu;
