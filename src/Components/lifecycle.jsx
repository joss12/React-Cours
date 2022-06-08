import React, {Component} from 'react';


class Life extends Component{
    constructor(props){
        super(props);
        console.log('1-constructor')
        this.state={
            name: "Eddy"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('2-getDerivedStateFromProps');

        if(state.name === 'Joss'){
            return{
                name: 'EG'
            }
        }

        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('x-shouldComponentUpdate');
        if(nextState.name === 'Axel'){
            return false
        }
        return true;
    }


    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('x-getSnapshotBeforeUpdate')
        let age = 20;
        return age; 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('x-componentDidUpdate');
        console.log(snapshot)
    }

    componentDidMount(){
        console.log('4-componentDidMount')
    }

    componentWillUnmount(){
        console.log('x- componentWillUnmount')
    }

    render(){
        console.log('3-render')
        return(
            <>
            <hr/>
               <div>{this.state.name}</div>
               <button onClick={()=>this.setState({name:' Joss'})}>Change Name</button>
            </>
        )
    }
}
export default Life