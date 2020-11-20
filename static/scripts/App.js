import React from 'react'
import NavBar from "./componets/Navbar";
import MyParticles from "./componets/Particles";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss'
import Clock from "./componets/Clock";


function App() {
  return (
    <div className="App">
        <NavBar />
        <MyParticles />
        <div>
            <h1>ABOUT ME</h1>
        </div>
        <Clock />
    </div>
  );
}

export default App;
