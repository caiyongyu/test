import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
    Prompt
  } from "react-router-dom"

  const Foo1=()=>{
    return(
        <div>
            <h1>Foo1</h1>
        </div>
    );
}

const Foo2=()=>{
    return(
        <div>
            <h1>Foo2</h1>
        </div>
    );
}
const LinkButton =withRouter(({history})=>{
    return(
        <button onClick={()=>{history.push("/test3/foo1")}}>foo1</button>
    )
})
export default class Test3 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/test3/foo1">foo1</Link>
                    <Link to="/test3/foo2">foo2</Link>
                    <LinkButton/>
                    <Prompt when={true} message={()=>{
                        return "确定离开吗？"
                    }}/>
                    <Switch>
                        <Route path="/test3/foo1" component={Foo1}/>
                        <Route path="/test3/foo2" component={Foo2}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
