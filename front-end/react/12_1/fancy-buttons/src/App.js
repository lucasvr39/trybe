import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() { // first func to execute therefore is possible to add behaviors
    super()

    this.handleClickCount = this.handleClickCount.bind(this);
    this.secondHandleClick = this.secondHandleClick.bind(this);
    this.thirdHandleClick = this.thirdHandleClick.bind(this);

    this.state = {
      clickCount: 0,
      secondClickCount: 2,
      thirdClickCount: 3
    };

    console.log('component constructed')
  }

  handleClickCount() {
    this.setState((previousState, _props) => ({
      clickCount: previousState.clickCount + 1
    }));
  }

  secondHandleClick() {
    this.setState((previousState, _props) => ({
      secondClickCount: previousState.secondClickCount + 2
    }))
  }

  thirdHandleClick() {
    this.setState((previousState, _props) => ({
      thirdClickCount: previousState.thirdClickCount + 3
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickCount}>{this.state.clickCount}</button>
        <button onClick={this.secondHandleClick}>{this.state.secondClickCount}</button>
        <button onClick={this.thirdHandleClick}>{this.state.thirdClickCount}</button>
      </div>
    )
  }
}

export default App;