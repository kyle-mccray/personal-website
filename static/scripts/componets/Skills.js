import React from 'react';
import MyParticles from "./Particles";

class Skills extends React.Component{
    componentDidMount() {
        document.title = "Kyle McCray - Skills"
    }

    render() {
        return(
            <div>
                <MyParticles />
                <h1 className="MyCenteredTextH1">Skills Page</h1>
            </div>
        )}
}

export default Skills;