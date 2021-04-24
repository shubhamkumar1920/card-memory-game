import React from "react";
// import './Style.css';
class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    
    clicked(img){
      this.props.click(img);
    }
    render(){
      return (
        <div className={"pokemon-card" + (!this.props.close ? 'open' : '') + (this.props.complete ? 'match' : '')} onClick={() => this.clicked(this.props.img)}>
          <div className="inner">
          <div className="front">
          </div>
          <div className="back">
            <img src={this.props.img}/>
          </div>
          </div>
          
        </div>
      )
    }
  }

  export default Card;  