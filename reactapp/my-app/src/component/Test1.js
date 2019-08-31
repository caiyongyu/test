import React, { Component } from 'react'

export default class Test1 extends Component {
    
    render() {
        return (
            <div>
                <h1>test1{this.props.match.params.id}</h1>
            </div>
        )
    }
}
