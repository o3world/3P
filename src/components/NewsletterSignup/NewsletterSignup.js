import React from 'react';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* @TODO: code goes here. */
  }

  render() {
    return (
        <div>
          <input id={'subscriberEmail'}></input>
          <button onClick={this.handleClick()}>Subscribe!</button>
        </div>
    )
  }
}

export default NewsletterSignup;