import React from 'react';

const buttonStyle = {
  margin: '10px 0px',
  outerWidth: '500px',
  
};

// const Button = ({label, handleClick}) => (
//   <button
//     className = "btn btn-default"
//     style = {buttonStyle}
//     onClick = {handleClick}
//     >
//       {label}
//       </button>
// );

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //handler goes here

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p> 
          <button
            className = "btn btn-default"
            style = {buttonStyle} 
          > Click Me</button> </p>
      </div>
    );
  }
}