import React from 'react'
import NavBar from "./componets/Navbar";
import MyParticles from "./componets/Particles";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss'
import Clock from "./componets/Clock";
import Footer from "./componets/Footer"


function App() {
  return (
    <div className="App">
        <NavBar />
        <MyParticles />
        {/*<div className="container-fluid">*/}
        {/*    <h1>ABOUT ME</h1>*/}
        {/*</div>*/}
        {/*<Clock />*/}
        {/*<Footer />*/}
    </div>
  );
}

export default App;
