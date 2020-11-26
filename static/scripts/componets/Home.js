import React from 'react';
import MyParticles from "./Particles";

class Home extends React.Component{
    componentDidMount() {
        document.title = "Kyle McCray"
    }
    render(){
        return(
            <div>
                <MyParticles />
                <h1 className="MyCenteredTextH1">Welcome</h1>
            </div>
        )
    }
}

export default Home;