import React, { Component } from 'react';
import styles from './HamburgerMenu.module.scss';
import {Link} from "react-router-dom";
import HamburgerCategories from './HamburgerMenuCategories'

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
            <HamburgerCategories />
            <Link to={'/sponsored-series'}>Sponsored Series</Link>
            <Link to={'/the-feed'}>The Feed</Link>
            <a target={'_blank'} rel={'noopener noreferrer'} href={'http://www.3blforum.com/brands-taking-stands-newsletter'}>Brands Taking Stands</a>
            <Link to={'/archive'}>Archive</Link>
            <Link to={'/editors'}>Meet Our Editors</Link>
            <a href={'https://contact.triplepundit.com/'} target={'_blank'} rel={'noopener noreferrer'}>Contact Us</a>
          </nav>
        </div>
    )
  }
}

export default HamburgerMenu;
