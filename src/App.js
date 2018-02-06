import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextBox from './TextBox';
import TitleBox from './TitleBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNum: 0,
      data: [
        {
          title: "Distant Earth-like planets could harbor water — and maybe life",
          content: "Several planets in a distant solar system have temperatures that could sustain liquid water, thought to be a key for life, a series of studies released Monday report."
        },
        {
          title: "Bitcoin price drops below $8,000 for first time since November 24",
          content: "Multiple virtual currencies have dropped significantly as regulators voiced concerns about them and worries grew over suggestions that the price of bitcoin has been propped up by popular exchange Bitfinex."
        },
        {
          title: "Here's how Alicia Vikander gained 12 pounds (of muscle) for 'Tomb Raider'",
          content: "At first, the weight gain was jarring for Vikander, who’s always been lean, but Lygdback assured the actress that she’d achieve the right action-hero look."
        }
      ]
    };
  }
  render() {
    console.log(this.state.titleNum);
    return (
        <div className="container">
          <TitleBox data={this.state.data} handleClick={this._setTitleNum} />
          <TextBox document={this.state.data[this.state.titleNum]} changeHandler={this._setNewText} />
        </div>
      );
  }

  _setNewText = (newText) => {
    const newTextArray = this.state.data.map((doc, i) => {
        if(i === this.state.titleNum) {
          return {
            title: doc.title,
            content: newText
          }
        } else {
          return doc;
        }
    });
    
    this.setState({
      data: newTextArray
    });
  }

  _setTitleNum = (num) => {
    console.log(num);
    this.setState({
      titleNum: num
    });  
  }
}

export default App;
