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
          {/* <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CardGame</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar> */}
      
        <div className="Game">
            <div>
            {!this.state.startButton ?
              <div style={{marginTop:150, marginLeft:250}}>
                <h3>Card Game</h3>
                <p>This is a fun game in which, you have to match all the cards to win the game.</p>
              </div>
              : <div></div>
            }
           </div>

          <div>
            {!this.state.startButton ?
              <p style={{marginLeft:250}}><Button variant="primary" onClick={this.handleClick}>Start Game</Button></p>
              :<Grid />
            }
          </div>
        </div>

        {/* <footer>
        <div className="text-center p-2">
            © 2021 Copyright: fun game   
        </div>
        </footer>
         */}
      </>
    );
  }
}

export default App;
