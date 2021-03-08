
import React from 'react'
import { Component } from 'react'


class Post extends Component {
  render() {
    return(
    <div class="styling">
        <h1>{this.props.postTitle}</h1>
        <p>by{this.props.author}</p>
        <h4> {this.props.content}</h4>
        <h3>{this.props.comments}</h3>
    </div>
    )
  }
}

export default Post;