import React from 'react';
import ShareButton from './ShareButton';
import ShareIconList from './ShareIconList';
import styles from './StoryShare.module.scss';

class StoryShare extends React.Component {
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
        <div className={styles.container}>
          <ShareButton handleMouseDown={this.handleMouseDown}/>
          <ShareIconList handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        </div>
    )
  }


}

export default StoryShare;
