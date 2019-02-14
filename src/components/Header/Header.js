import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import HamburgerNav from '../Navigation/HamburgerNav';
import SearchButton from '../Search/SearchButton';
import HeaderSubscribeToggle from './NewsletterSignup/HeaderSubscribeToggle';

import logo__large from '../../assets/images/3P_Logo_Homepage_Large.png';
import logo__small from '../../assets/images/3P_Logo_Homepage_Small.png';
import SearchForm from "../Search/SearchForm";
import NewsletterSignupForm from "./NewsletterSignup/NewsletterSignupForm";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearchVisible: false,
            isNewsletterSignupVisible: false
        };

        this.toggleSearchForm = this.toggleSearchForm.bind(this);
        this.toggleNewsletterForm = this.toggleNewsletterForm.bind(this);
    }

    toggleSearchForm() {
        this.setState({
            isSearchVisible: !this.state.isSearchVisible,
            isNewsletterSignupVisible: false
        })
    }

    toggleNewsletterForm() {
        this.setState({
            isNewsletterSignupVisible: !this.state.isNewsletterSignupVisible,
            isSearchVisible: false
        })
    }

    render() {

      var logo = logo__small;
      var logoStyle = styles.logoThin;
      if (this.props.location.pathname === '/') {
        logo = logo__large;
        logoStyle = styles.logo;
      }
        return (
            <header className={styles.wrapper}>
                <Link to={'/'}><img className={logoStyle} src={logo} alt={'3bl logo'} /></Link>
                <HeaderSubscribeToggle className={styles.subscribeToggle} handleClick={this.toggleNewsletterForm} visible={this.state.isNewsletterSignupVisible}/>
                <SearchButton className={styles.searchButton} handleClick={this.toggleSearchForm} visible={this.state.isSearchVisible}/>
                <HamburgerNav/>
                <SearchForm visible={this.state.isSearchVisible} formClass={styles.searchForm}/>
                <NewsletterSignupForm signupClass={styles.subscribeForm} visible={this.state.isNewsletterSignupVisible}/>
            </header>
        )
    }
}

export default Header;
