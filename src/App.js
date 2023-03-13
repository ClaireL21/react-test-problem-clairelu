import React from 'react';

const buttonStyle = {
  margin: '10px 0px'  
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  //handler goes here
  handleClick() {
    this.setState(prevState => ({isOn: !prevState.isOn}));
  };
  
  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p> 
          { <button
            className = "btn btn-default"
            style = {buttonStyle} 
            onClick = {this.handleClick} 
            >{this.state.isOn ? "Click Me" : "Thanks"}
            </button> }
            </p>
      </div>
    );
  }
}