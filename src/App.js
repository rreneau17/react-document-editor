import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextBox from './TextBox';
import TitleBox from './TitleBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNum: null
    };
  }
  render() {
    console.log(this.state.titleNum);
    return (
        <div className="container">
          <TitleBox data={this.props.data} handleClick={this._setTitleNum} />
          <TextBox data={this.props.data} titleNum={this.state.titleNum} />
        </div>
      );
  }

  _setTitleNum = (num) => {
    console.log(num);
    this.setState({
      titleNum: num
    });  
  }
}

export default App;
