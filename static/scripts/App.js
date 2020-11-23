import React from 'react'
import NavBar from "./componets/Navbar";
import MyParticles from "./componets/Particles";
import './scss/App.scss'
import Clock from "./componets/Clock";
import Footer from "./componets/Footer"



function App() {
  return (
    <div className="App">
        <NavBar />
        <main>
            <Home />
            <AboutMe />
            <Skills />
        </main>
        <Footer />
    </div>
  );
}

class Home extends React.Component{
    render() {
        return(
            <div className="container">
                <h1>Welcome to My Site</h1>
            </div>
        )
    }
}

class AboutMe extends React.Component{
    render() {
        return(
            <div className="container">
                <h1>About Me</h1>
                <p>
                    Hi my name is Kyle McCray. I am an aspiring software developer looking to improve my coding skills.
                    I am always looking for a challenge to conquer and love writing code. At my last job I wore many hats
                    and TODO.
                    <br />
                    I first started to get into computers when my dad decided that he would no longer help me and my brother
                    get rid of viruses off of our windows xp computer. Ever since then I've been working with computers and have been loving it.
                    <br/>
                    TODO ADD MORE CONTENT.
                </p>
            </div>

        )
    }
}

class Skills extends React.Component{
    render() {
        return(
            <div className="container">
                <h1>My Skills</h1>
                <p>
                    PYTHON, JAVA, DEVOPS, PROBLEM SOLVING
                </p>
            </div>
        )
    }
}

export default App;
