import React from 'react';
import ShareButton from './ShareButton';
import ShareMenu from './ShareMenu';
import styles from './ShareNav.module.scss';

class ShareNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
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

    console.log("clicked");
    e.stopPropagation();
  }

  render() {
    return (
        <div className={styles.nav}>
          <ShareButton handleMouseDown={this.handleMouseDown}/>
          <ShareMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        </div>
    )
  }


}

export default ShareNav;
