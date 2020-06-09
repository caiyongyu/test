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
    this.setState(() => {
      return {
        list: [...this.state.list,this.state.inputValue],
        inputValue: ''
      }
    })
    
  }

  handleValueChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    })
     
      
    )
      
    
  }

  

  handleDelete(index) {
    // console.log(index);
    
    
    this.setState(() => {
      const list=[...this.state.list];
      list.splice(index,1);
      return {
        list
      }
    })
  }

  getItem() {
    return (this.state.list.map((item,index) => {
      return (
        // <li dangerouslySetInnerHTML={{__html: item}} onClick={this.handleDelete.bind(this,index)} key={index}>
        // </li>
        <LiItem 
        content={item}
        deleteItem={this.handleDelete} 
        index={index}
        key={index}
        />
      )
    })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
         
          <label htmlFor="insertArea">扩大点击区域</label>
          <input id="insertArea" value={this.state.inputValue} onChange={this.handleValueChange}/>
          <button className='btn' style={{background: 'red',color:'#fff'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getItem()}</ul>
      </Fragment>
    )
  }
}

export default App;
