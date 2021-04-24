import '../App.css';
import React from "react";
import Card from "./Card";
// import './Style.css'

class Grid extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        images:['/images/img1.png','/images/img2.jpg','/images/img3.png','/images/img4.jpg','/images/img5.png','/images/img6.png','/images/img7.png','/images/img8.jpg'],
        copyArray: [],
        randArray: [],
        lastArray: [],
        openImageArray: [],
        counter: 0,
        second:0,
      }
      this.startGame();
      this.startClock();
    }

    startClock(){
        this.clock=setInterval(this.tick.bind(this),1000);
    }
    tick(){
        this.setState({second:(this.state.second+1)});
        if(this.state.counter===8){
            clearInterval(this.clock);
        }
    }

    startGame(){
        let lastArray = [];
        this.state.copyArray = this.state.images.concat(this.state.images);
        this.state.randArray = this.shuffling(this.state.copyArray);
        this.state.randArray.map((name,index) => {
          lastArray.push({
            name,
            close: true,
            complete: false,
            fail: false
          })
        })
        this.state.lastArray = lastArray;
      }

    handleClick(name,index){
      if(this.state.openImageArray.length === 2){
        setTimeout(() => {
          this.check()
        },200)
      }
      else {
        let img = {
          name,
          index
        }
        let lastArray = this.state.lastArray;
        let images = this.state.openImageArray;
        lastArray[index].close = false;
        images.push(img);
        this.setState({
          openImageArray: images,
          lastArray: lastArray
        })
        if(this.state.openImageArray.length === 2){
          setTimeout(() => {
            this.check()
          },200)
        }
      }
    } 

    check(){
      let lastArray = this.state.lastArray;
      if((this.state.openImageArray[0].name === this.state.openImageArray[1].name) && (this.state.openImageArray[0].index !== this.state.openImageArray[1].index)){
        lastArray[this.state.openImageArray[0].index].complete = true;
        lastArray[this.state.openImageArray[1].index].complete = true;
        this.state.counter=this.state.counter+1; 
      }
      else {
        lastArray[this.state.openImageArray[0].index].close = true;
        lastArray[this.state.openImageArray[1].index].close = true;
      }
      this.setState({
        lastArray,
        openImageArray: []
      })
    }

    shuffling(array){
      let currIndex = array.length, temp , randomIndex;
      while (0 !== currIndex) {
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;
        temp  = array[currIndex];
        array[currIndex] = array[randomIndex];
        array[randomIndex] = temp ;
      }
      return array;
    }

    render(){
      return (
        <div className="grid">
          <div className="Timer">
        {this.state.counter===8 ? <h3>You won the game in {this.state.second} seconds ☺ </h3>: <h3>Time : {this.state.second} seconds</h3> }
      </div>
           
            <div className="cards" >
              {this.state.lastArray.map((img, index) => {
                return <Card img={img.name} click={() => {this.handleClick(img.name,index)}} close={img.close} complete={img.complete}/>
              })
            }
            </div>
        
        </div>
      )
    }
}
export default Grid;