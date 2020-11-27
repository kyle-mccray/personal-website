import React from 'react';
import MyParticles from "./Particles";

class NotFound extends React.Component{
    render() {
        return(
            <div>
                <MyParticles />
                <h1 className="CenteredJumbo">404</h1>
            </div>
        )
    }
}

export default NotFound;