import React, { Component } from 'react';
import styles from './HamburgerMenu.module.scss';
import {Link} from "react-router-dom";

class HamburgerMenu extends Component {
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
            <Link to={'http://www.3blforum.com/brands-taking-stands-newsletter'}>Stands</Link>
            <Link to={'http://www.3blassociation.com/insights/magazines'}>CR Magazine</Link>
            <Link to={'http://www.3blforum.com/'}>3BL Forum</Link>
            <Link to={'/editors'}>Editors</Link>
          </nav>
        </div>
    )
  }
}

export default HamburgerMenu;