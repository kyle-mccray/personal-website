import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Row, Col, Container} from 'react-bootstrap';


class Footer extends React.Component{
    render() {
        return(
        <footer className="container-fluid" >
            <Container className="MyFooter text-center">
                <Row>
                    <Col md={4} sm={12} > <FontAwesomeIcon icon={faEnvelope} /> mccraykylec@gmail.com </Col>
                    <Col md={4} sm={12} >
                        <a href="https://linkedin.com/in/kyle-mccray">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </Col>
                    <Col md={4} sm={12} >
                        <a href="https://github.com/kyle-mccray">
                            <FontAwesomeIcon icon={faGithub}/> GitHub
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
        );
    }
}

export default Footer;