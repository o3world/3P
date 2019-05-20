import React from 'react';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';
import styles from './HamburgerNav.module.scss';

class HamburgerNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  render() {
    return (
        <div className={styles.nav}>
          <HamburgerButton handleMouseDown={this.handleMouseDown}/>
          <HamburgerMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        </div>
    )
  }


}

export default HamburgerNav;