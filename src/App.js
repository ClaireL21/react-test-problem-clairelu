import React from 'react';
import PropTypes from 'prop-types';

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

/**
 * Additional Buttons that allow the user
 * to test functionality and appearance properties
 * in storybook
 */

// Allows user to input different labels as button text
const ButtonText = (props) => {
  const {
    text
  } = props;
  return (
    <div>
      <p>Greetings!</p>
        <p> 
          <button
          className = "btn btn-default"
            style = {buttonStyle} 
            //onClick = {this.handleClick} 
            >{text}
          </button>
        </p>
    </div>
  );
}; 

ButtonText.propTypes = {
  text: PropTypes.string
};
ButtonText.defaultProps = {
  text: "default"
};
export {ButtonText};

// Allows user to test functionality of button labels 
// based on user input for button state
const ButtonChangeState = (props) => {
  const {
    buttonState
  } = props;
  return (
    <div>
      <p>Greetings!</p>
        <p> 
          <button
          className = "btn btn-default"
            style = {buttonStyle} 
            >{buttonState ? "Click Me" : "Thanks"}
          </button>
        </p>
    </div>
  );
}; 

ButtonChangeState.propTypes = {
  buttonState: PropTypes.bool
};
ButtonChangeState.defaultProps = {
  buttonState: true
};
export {ButtonChangeState};