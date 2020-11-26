import React from 'react';
import MyParticles from "./Particles";

class About extends React.Component{
    componentDidMount() {
        document.title = "Kyle McCray - About"
    }

    render() {
        return(
            <div>
                <MyParticles />
                <h1 className="MyCenteredTextH1">About Me Page</h1>
            </div>
    )}
}

export default About;