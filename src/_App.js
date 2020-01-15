import React, { Component } from 'react';
import './App.css';

function Hello(props) {
  return(
    <div>
      {props.mytext}
    </div>
  );
}

class App extends Component {
  state = {
    show: true
  }

  changeState = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <Hello mytext="This is a props :3"/>
          {/*<button onClick={this.changeState.bind(this)}>Change State</button>*/}
          {/* <button onClick={() => this.changeState()}>Change State</button>}*/}
          <button onClick={this.changeState}>Change State</button>
        </div>
      );
    } else {
      return (
        <h1>Noo hay elementos <button onClick={this.changeState}>Change Again</button></h1>
      )
    }
  }
}

//export default App;
