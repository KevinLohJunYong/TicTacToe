import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var player = 'O';
var gameEnded = false;
var winner = null;

class Square extends React.Component {
  render() {
    return (
       <button style={{backgroundColor:"white",width:"50px",height:"50px",fontSize:"x-large"}} 
        onClick={this.props.onClick}>
         {this.props.value}
       </button>
    );
  };
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  handleClick(id) {
    const _squares = this.state.squares.slice();
    _squares[id] = player;
    if(calculateWinner(_squares)) {
      gameEnded = true;
      winner = player;
    }
    this.setState({squares: _squares});
  }
  render() {
    player = player === 'X' ? 'O' : 'X';
    var status = "It is " + player + "'s" + " turn";
    if (gameEnded) status = winner + " won";
    return (
       <div>
         <div style={{fontSize:"x-large",marginBottom:"10px"}}>
           {status}
         </div>
         <div style={{display:"flex",flexDirection:"row"}}>
             <Square
                onClick={()=>this.handleClick(0)}
                value={this.state.squares[0]}></Square>
             <Square
                onClick={()=>this.handleClick(1)}
                value={this.state.squares[1]}></Square>
             <Square
                onClick={()=>this.handleClick(2)}
                value={this.state.squares[2]}></Square>
         </div>
         <div style={{display:"flex",flexDirection:"row"}}>
            <Square
                onClick={()=>this.handleClick(3)}
                value={this.state.squares[3]}></Square>
             <Square
                onClick={()=>this.handleClick(4)}
                value={this.state.squares[4]}></Square>
             <Square
                onClick={()=>this.handleClick(5)}
                value={this.state.squares[5]}></Square>
         </div>
         <div style={{display:"flex",flexDirection:"row"}}>
             <Square
                onClick={()=>this.handleClick(6)}
                value={this.state.squares[6]}></Square>
             <Square
                onClick={()=>this.handleClick(7)}
                value={this.state.squares[7]}></Square>
             <Square
                onClick={()=>this.handleClick(8)}
                value={this.state.squares[8]}></Square>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return false;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
