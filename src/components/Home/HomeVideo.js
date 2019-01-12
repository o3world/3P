import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class HomeVideo extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=Z5BUgJCVhD0' height='511' width='714' />
  }
}

export default HomeVideo;
