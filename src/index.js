import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component {
  render() {
    return (
       <button style={{backgroundColor:"white",width:"50px",height:"50px"}} onClick={this.props.onClick}>
         {this.props.value}
       </button>
    );
  };
}
class Board extends React.Component {
  render() {
    return (
       <div>
         <div style={{display:"flex",flexDirection:"row"}}>
             <Square></Square>
             <Square></Square>
             <Square></Square>
         </div>
         <div style={{display:"flex",flexDirection:"row"}}>
             <Square></Square>
             <Square></Square>
             <Square></Square>
         </div>
         <div style={{display:"flex",flexDirection:"row"}}>
             <Square></Square>
             <Square></Square>
             <Square></Square>
         </div>
       </div>
    );
  };
}
class Game extends React.Component {
  render() {
    return (
        <Board></Board>
    );
  };
}


// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
