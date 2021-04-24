import React, { Component} from 'react';
import {Navbar,Nav,Form,FormControl,Button,Jumbotron,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Grid from "./components/Grid"

class App extends Component {
  constructor(){
    super();
    this.state={
      startButton:false,
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({startButton:true});
  }

  render() {
    return (
      <>
        <div className="game">
            <div>
            {!this.state.startButton ?
              <div>
                <h1 className="header" >Card Memory Game</h1>
                <h3 className="rule">Rule:</h3>
                <h4 className="first">
                  <pre>This is a fun game in which,
                  you have to make a pair of all the cards to win the game.
                  </pre>
                </h4>
              </div>
              : <div></div>
            }
           </div>

          <div>
            {!this.state.startButton ?
              <p style={{marginLeft:370}}><Button variant="info" onClick={this.handleClick}>Ready to Play</Button></p>
              :<Grid />
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;
