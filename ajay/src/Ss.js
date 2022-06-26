import React, { Component } from 'react'

export class Ss extends Component {

    show(evt) {
        // code   
    }  
    render() {      
        // Render the div with an onClick prop (value is a function)        
        return (            
           
<div onClick={this.show}>Click Me!</div>
 
        );    
    }
};


  

export default Ss