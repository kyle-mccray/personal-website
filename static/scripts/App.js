import './scss/App.scss'
import React from 'react'
import NavBar from "./componets/Navbar";
import Footer from "./componets/Footer"
import Routes from "./componets/Routes";
import MyParticles from "./componets/Particles";


function App() {
  return (
    <div className="App">
        <NavBar />
        <MyParticles />
        <Routes />
        <Footer />
    </div>
  );
}



export default App;
