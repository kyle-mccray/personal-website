import React from 'react';
import MyParticles from "./Particles";
import {Container, Row, Col} from "react-bootstrap";


class Home extends React.Component{
    componentDidMount() {
        document.title = "Kyle McCray"
    }
    render(){
        return(
            <div>
                <Container className="CenteredParagraph">
                    <Row>
                        <Col>
                            <h3>About Me</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Hi My name is Kyle McCray. I am a software developer looking to expand my career.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Home;