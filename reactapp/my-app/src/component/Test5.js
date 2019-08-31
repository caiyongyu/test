import React, { Component } from 'react'
import {connect} from "react-redux"
import store from "../store"
const add = (num)=>{
    return {
        type:"ADD",
        step:num
    }
}
class Test5 extends Component {
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }
    
    addClick(){
        this.props.add(20)
        // store.dispatch(add())
        // this.setState({
        //     num:store.getState().count
        // })
    }
    render() {
        return (
            <div>
                {/* <h1>{this.state.num}</h1> */}
                <h1>{this.props.count}</h1>
                <button onClick={this.addClick.bind(this)}>add</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        count:state.count
    }
}   
const mapDispatchToProps = (dispatch) => {
    return{
        add:(num)=>dispatch(add(num))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test5)
