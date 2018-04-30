import React, { Component } from 'react';
import './App.css';
import DrawingForm from './DrawingForm'
import DrawingList from './DrawingList'
import Drawing from './Drawing'
import Connection from "./Connection";

class App extends Component {
  state = {
    selectedDrawing: null
  }

  selectDrawing = (drawing) => {
    this.setState({
      selectedDrawing: drawing
    })
  } 

  render() {
    let ctr = (
      <div>
        <DrawingForm />
        <DrawingList selectDrawing={this.selectDrawing}/>
      </div>
    )

    if(this.state.selectedDrawing){
      ctr = (
        <Drawing drawing={this.state.selectedDrawing} 
                 key={this.state.selectedDrawing.id} />
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        <Connection />
        {ctr}
      </div>
    );
  }
}

export default App;

