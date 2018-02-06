import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextBox from './TextBox';
import TitleBox from './TitleBox';

// const newsItems = [
//   {
//     titleNum: 1,
//     title: "Distant Earth-like planets could harbor water — and maybe life",
//     content: "Several planets in a distant solar system have temperatures that could sustain liquid water, thought to be a key for life, a series of studies released Monday report."
//   },
//   {
//     titleNum: 2,
//     title: "Bitcoin price drops below $8,000 for first time since November 24",
//     content: "Multiple virtual currencies have dropped significantly as regulators voiced concerns about them and worries grew over suggestions that the price of bitcoin has been propped up by popular exchange Bitfinex."
//   },
//   {
//     titleNum: 3,
//     title: "Here's how Alicia Vikander gained 12 pounds (of muscle) for 'Tomb Raider'",
//     content: "At first, the weight gain was jarring for Vikander, who’s always been lean, but Lygdback assured the actress that she’d achieve the right action-hero look."
//   }
// ]

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
        <TitleBox data={this.props.data} handleClick={this._setTitleNum} />
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
