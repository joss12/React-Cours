import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props)
        this.state ={
            value: 5
        }
    }
    render(){
        console.log(this.state.value)
        return(
            <div>

            <h1>{this.props.footerText}</h1>
            </div>
        )
    }
}

export default Footer; 
