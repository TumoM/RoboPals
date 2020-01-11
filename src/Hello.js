import React, {Component} from 'react';
import ("./Hello.css");

class Hello extends Component{
    render(){
        return (
            <div className='f1 tc'>
            <h1>Hello There</h1>
            <p>Welcome {this.props.greeting}</p>
            </div>
        )
    }
}

export default Hello