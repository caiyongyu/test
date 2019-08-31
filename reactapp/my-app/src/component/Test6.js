import React, { Component } from 'react'
import axios from "axios"

export default class Test6 extends Component {
    componentDidMount(){
        axios.get("https://api.myjson.com/bins/icw8n").then((res)=>{
            console.log(res);
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
