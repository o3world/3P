import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import HamburgerNav from '../Navigation/HamburgerNav';
import SearchButton from '../Search/SearchButton';

import logo__large from '../../assets/images/3P_Logo_Homepage_Large.png';
import SearchForm from "../Search/SearchForm";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchVisible: false,
      isNewsletterSignupVisible: false
    };

    this.toggleSearchForm = this.toggleSearchForm.bind(this);
  }

  toggleSearchForm() {
    this.setState({
      isSearchVisible: !this.state.isSearchVisible
    });
    console.log('SearchForm visible: ' + this.state.isSearchVisible);
  }

  render() {
    return (
      <header className={styles.wrapper}>
        <Link to={'/'}><img className={styles.logo} src={logo__large} alt={'3bl logo'} /></Link>
        <div className={styles.searchButton}><SearchButton handleClick={this.toggleSearchForm} visible={this.state.isSearchVisible}/></div>
        <HamburgerNav/>
        <SearchForm visible={this.state.isSearchVisible} formClass={styles.searchForm}/>
      </header>
    )
  }
}

export default Header;