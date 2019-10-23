import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class HomeVideo extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=7Y-wH6MLZek' height='100%' width='100%' />
  }
}

export default HomeVideo;
