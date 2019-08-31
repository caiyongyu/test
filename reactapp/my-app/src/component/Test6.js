import React, { Component } from 'react'
import axios from "axios"

export default class Test6 extends Component {
    componentDidMount(){
        let url1="https://api.myjson.com/bins/icw8n"
        let url2="https://www.fellow32.com/getdate"
        axios.get(url2).then((res)=>{
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
