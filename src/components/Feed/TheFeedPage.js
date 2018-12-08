import React, { Component } from 'react';
import FeedItem from './FeedItem';

class TheFeedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount = () => {
      fetch('https://3blmedia.com/api/v1/feed')
          .then(response => response.json())
          .then(data => this.setState({ data: data.results }));
    };

    render() {
        return (
            <div>
                <div>
                    <h3>The Feed</h3>
                    <span>Latest News from Leaders in Corporate Social Responsibility</span>
                </div>

              { this.state.data.map(feeditem =>
                  <FeedItem {...feeditem} key={feeditem.id} />
              )}
            </div>
        )
    }

}

export default TheFeedPage;