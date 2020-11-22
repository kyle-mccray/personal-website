import React from 'react'
import NavBar from "./componets/Navbar";
import MyParticles from "./componets/Particles";
import './scss/App.scss'
import Clock from "./componets/Clock";
import Footer from "./componets/Footer"



function App() {
  return (
    <div>
        <header>
            <NavBar />
        </header>
        <MyParticles />
        <footer className="bd-footer">
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
