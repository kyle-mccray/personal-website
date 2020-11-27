import React from 'react';
import MyParticles from "./Particles";

class Skills extends React.Component{
    componentDidMount() {
        document.title = "Kyle McCray - Skills"
    }

    render() {
        return(
            <div>
                <h1 className="CenteredJumbo">Skills Page</h1>
            </div>
        )}
}

export default Skills;