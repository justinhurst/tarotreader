import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  state = {
    spreadType : undefined,
    spread : []
  }
  getSpread (type) {
    console.log('getSpread()');
    fetch(`https://tarot.howlcode.com/spreads/${ type }`)
      .then( data => data.json() )
      .then( data => {
        const formattedSpread = data;
        formattedSpread.forEach(function(element, index) {
          element.flipped = false;
          element.id = index;
        });
        this.setState({spread : formattedSpread, spreadType : type });
      })
  }
  renderCards(){
    return this.state.spread.map((card, key) => {
      return <Card 
                key={ key } 
                name={ card.name }
                img={card.face_image_url}
                keyWords={ card.up }
                meaning={card.short_meaning}
                flipped={card.flipped}
                id={card.id}
                flipOver={(id) => this.flipCard(id)}
                index={ key } />
    })
  }
  flipCard(id){
    const cards = this.state.spread.map(card =>{
      if(card.id === id) {
        card.flipped = !card.flipped
      }
      return card
    });
    this.setState({spread: cards});
  }
  render () {
    return (
      <div className="App">
        <header>
          <h1>Tarot Reader</h1>
          <button onClick={ ()=> this.getSpread('random_card')}>Draw One</button>
          <button onClick={ ()=> this.getSpread('three_cards')}>Draw Three</button>
          <button onClick={ ()=> this.getSpread('celtic_cross')}>Draw Ten</button>
        </header>
        <ul> { this.renderCards() } </ul>
      </div>
    );
  }
}

export default App;