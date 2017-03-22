import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(){

	super();
	this.state={mensaje: ""}


}
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.repetir.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.mensaje}</p>
      </div>
    );
  }

repetir(event){


  		this.setState({

  			mensaje: event.target.value
  		})



}
}

export default App;
