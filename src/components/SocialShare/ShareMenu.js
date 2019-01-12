import React, { Component } from 'react';
import styles from './ShareMenu.module.scss';
import {Link} from "react-router-dom";

class ShareMenu extends Component {
  render() {
    let visibility = styles.hide;

    if (this.props.menuVisibility) {
      visibility = styles.show;
    }

    return (
        <div onClick={this.props.handleMouseDown} className={styles.menu + ' ' + visibility}>
          <nav className={styles.navList}>
            <Link to={'/'}>Home</Link>
            <Link to={'/stories'}>Stories</Link>
            <Link to={'/sponsored-series'}>Sponsored Series</Link>
            <Link to={'/the-feed'}>The Feed</Link>
          </nav>
        </div>
    )
  }
}

export default ShareMenu;
