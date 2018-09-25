import React, { Component } from 'react';

class Card extends Component {
  render() {
    console.log(this.props.id);
    return (
        <li className={ this.props.flipped ? "card-item flipped" : "card-item" }>
            <div className="card-container" onClick={()=> this.props.flipOver(this.props.id)}>
                <div className={ this.props.flipped ? "card flipped" : "card" }>
                    <div className="side"><div className="card-pattern"></div></div>
                    <div className="side back"><img src={ this.props.img } alt={ this.props.name } /></div>
                </div>
            </div>
            <div class="card-info">
            <h2>{ this.props.name }</h2>
                <p>Key Words: { this.props.keyWords }</p>
                <p>{ this.props.meaning }</p>
            </div>
        </li>
    );
  }
}

export default Card;
