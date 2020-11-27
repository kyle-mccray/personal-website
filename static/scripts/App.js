import './scss/App.scss'
import React from 'react'
import NavBar from "./componets/Navbar";
import Footer from "./componets/Footer"
import Routes from "./componets/Routes";


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes />
        <Footer />
    </div>
  );
}



export default App;
