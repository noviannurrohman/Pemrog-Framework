import React, { Component } from "react";
import Footer from "./Footer";

class App extends Component{
  render(){
    return(
      <div>
        <h1>Component dari Class App</h1>
        <Footer judul="halaman Footer" nama="Aufa"/>
      </div>
    );
  }
}
export default App;