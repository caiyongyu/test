import React, { Component, Fragment } from 'react';
import LiItem from './LiItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    // alert(11);
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  handleValueChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    
  }

  

  handleDelete(index) {
    console.log(index);
    
    const list=[...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }

  getItem() {
    return (this.state.list.map((item,index) => {
      return (<LiItem 
              delete={this.handleDelete} 
              content={item} 
              key={index} 
              index={index} 
              />)
              // <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
    })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleValueChange}/>
          <button className='btn' style={{background: 'red',color:'#fff'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getItem()}</ul>
      </Fragment>
    )
  }
}

export default App;
