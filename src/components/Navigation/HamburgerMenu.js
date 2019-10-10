import React, { Component } from 'react';
import styles from './HamburgerMenu.module.scss';
import {Link} from "react-router-dom";
import HamburgerCategories from './HamburgerMenuCategories'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCategoriesExpanded: true,
    };

    this.toggleCategoryMenu = this.toggleCategoryMenu.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  toggleCategoryMenu() {
    this.setState({
      isCategoriesExpanded: !this.state.isCategoriesExpanded,
    });
  }

  handleCategoryClick(e) {
    this.toggleCategoryMenu();
    console.log(`Category toggle was clicked. It's set to ${this.state.isCategoriesExpanded}`);
    e.stopPropagation();
  }

  render() {
    let visibility = styles.hide;

    if (this.props.menuVisibility) {
      visibility = styles.show;
    }

    let categoryToggleStyle = this.state.isCategoriesExpanded ? styles.subMenuToggleOpen : styles.subMenuToggleClosed;

    return (
        <div onClick={this.props.handleMouseDown} className={styles.menu + ' ' + visibility}>
          <nav className={styles.navList}>
            <Link to={'/'}>Home</Link>
            <div className={styles.parentItem}><Link to={'/stories'}>Stories</Link> <FontAwesomeIcon icon={"angle-right"} className={categoryToggleStyle} onClick={this.handleCategoryClick} /></div>
            <HamburgerCategories isExpanded={this.state.isCategoriesExpanded} />
            <Link to={'/sponsored-series'}>Sponsored Series</Link>
            <Link to={'/the-feed'}>The Feed</Link>
            <a target={'_blank'} rel={'noopener noreferrer'} href={'/category/brands-taking-stands/59911'}>Brands Taking Stands</a>
            <Link to={'/archive'}>Archive</Link>
            <Link to={'/editors'}>Meet Our Editors</Link>
            <a href={'https://contact.triplepundit.com/'} target={'_blank'} rel={'noopener noreferrer'}>Contact Us</a>
          </nav>
        </div>
    )
  }
}

export default HamburgerMenu;
