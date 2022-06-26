import React, { Component } from 'react'

export default class State extends Component {

    state={
        name:'vamsi',
        email:'bjbjb'
        
    }

    state={
        name:'sai',
        email:'sai@'
    }





  render() {
    return (
      <div>

          <h1>{this.props.name}   {this.state.email}</h1>



      </div>
    )
  }
}
