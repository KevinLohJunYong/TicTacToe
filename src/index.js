import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var player = 'X';

var isEnd = false;

class Square extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       value: null,
     }
  }
  render() {
    return (
      <div>
        <button 
           style={{width:"50px",height:"50px",backgroundColor:"white",fontSize:"x-large"}}
           onClick={() => this.setState({value:'X'})}>
           {this.state.value}
        </button>
      </div>
    );
  };
}

let renderSquare = (_squareId) => {
   return (
     <Square />
   );
};

let renderRow = (_squareId) => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
         {renderSquare(_squareId)}
         {renderSquare(_squareId+1)}
         {renderSquare(_squareId+2)}
    </div>
  );
};
class Board extends React.Component {
  render() {
    return (
      <div>
         {renderRow(1)}
         {renderRow(4)}
         {renderRow(7)}
      </div>
  );
  };
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <p>
           It is {player}'s turn
         </p>
        <Board />
      </div>
    );
  };
}


// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
