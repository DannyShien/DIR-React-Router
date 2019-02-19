import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';

import {
    BrowserRouter as Router, 
    // Route, 
    // Link
} from 'react-router-dom';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <div>
                    <h1>Main App</h1>
                </div>
            </div>
        </Router>
      
    );
  }
}

export default App;
