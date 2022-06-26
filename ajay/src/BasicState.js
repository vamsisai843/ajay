import React, { Component } from 'react'

export default class BasicState extends Component {

    state={
        name:"vamsi"
    }



  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
