import React from "react";
import Particles from "react-particles-js";
import {Container, Row, Col} from 'react-bootstrap';
class MyParticles extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Particles height="100vh" width="100%"
                           params={
                               {
                                   "detectRetina": true,
                                   "fpsLimit": 60,
                                   "infection": {
                                       "cure": false,
                                       "delay": 0,
                                       "enable": false,
                                       "infections": 0,
                                       "stages": []
                                   },
                                   "interactivity": {
                                       "detectsOn": "window",
                                       "events": {
                                           "onClick": {
                                               "enable": false,
                                               "mode": []
                                           },
                                           "onDiv": {
                                               "selectors": [],
                                               "enable": false,
                                               "mode": [],
                                               "type": "circle"
                                           },
                                           "onHover": {
                                               "enable": true,
                                               "mode": "trail",
                                               "parallax": {
                                                   "enable": false,
                                                   "force": 2,
                                                   "smooth": 10
                                               }
                                           },
                                           "resize": true
                                       },
                                       "modes": {
                                           "attract": {
                                               "distance": 200,
                                               "duration": 0.4,
                                               "speed": 1
                                           },
                                           "bounce": {
                                               "distance": 200
                                           },
                                           "bubble": {
                                               "distance": 200,
                                               "duration": 0.4
                                           },
                                           "connect": {
                                               "distance": 80,
                                               "links": {
                                                   "opacity": 0.5
                                               },
                                               "radius": 60
                                           },
                                           "grab": {
                                               "distance": 100,
                                               "links": {
                                                   "blink": false,
                                                   "consent": false,
                                                   "opacity": 1
                                               }
                                           },
                                           "light": {
                                               "area": {
                                                   "gradient": {
                                                       "start": {
                                                           "value": "#ffffff"
                                                       },
                                                       "stop": {
                                                           "value": "#000000"
                                                       }
                                                   },
                                                   "radius": 1000
                                               },
                                               "shadow": {
                                                   "color": {
                                                       "value": "#000000"
                                                   },
                                                   "length": 2000
                                               }
                                           },
                                           "push": {
                                               "quantity": 4
                                           },
                                           "remove": {
                                               "quantity": 2
                                           },
                                           "repulse": {
                                               "distance": 200,
                                               "duration": 0.4,
                                               "speed": 1
                                           },
                                           "slow": {
                                               "factor": 3,
                                               "radius": 200
                                           },
                                           "trail": {
                                               "delay": 0,
                                               "quantity": 0,
                                               "particles": {
                                                   "color": {
                                                       "value": "#ff0000",
                                                       "animation": {
                                                           "enable": true,
                                                           "speed": 400,
                                                           "sync": true
                                                       }
                                                   },
                                                   "collisions": {
                                                       "enable": false,
                                                       "bounce": {
                                                           "horizontal": {
                                                               "random": {}
                                                           },
                                                           "vertical": {
                                                               "random": {}
                                                           }
                                                       }
                                                   },
                                                   "links": {
                                                       "enable": false,
                                                       "shadow": {},
                                                       "triangles": {}
                                                   },
                                                   "move": {
                                                       "outMode": "destroy",
                                                       "speed": 5,
                                                       "angle": {},
                                                       "attract": {
                                                           "rotate": {}
                                                       },
                                                       "gravity": {},
                                                       "noise": {
                                                           "delay": {
                                                               "random": {}
                                                           }
                                                       },
                                                       "outModes": {},
                                                       "trail": {}
                                                   },
                                                   "size": {
                                                       "value": 5,
                                                       "animation": {
                                                           "enable": true,
                                                           "speed": 5,
                                                           "minimumValue": 1,
                                                           "sync": true,
                                                           "startValue": "min",
                                                           "destroy": "max"
                                                       },
                                                       "random": {}
                                                   },
                                                   "bounce": {
                                                       "horizontal": {
                                                           "random": {}
                                                       },
                                                       "vertical": {
                                                           "random": {}
                                                       }
                                                   },
                                                   "life": {
                                                       "delay": {
                                                           "random": {}
                                                       },
                                                       "duration": {
                                                           "random": {}
                                                       }
                                                   },
                                                   "number": {
                                                       "density": {}
                                                   },
                                                   "opacity": {
                                                       "animation": {},
                                                       "random": {}
                                                   },
                                                   "rotate": {
                                                       "animation": {}
                                                   },
                                                   "shadow": {
                                                       "offset": {}
                                                   },
                                                   "shape": {},
                                                   "stroke": {
                                                       "color": {
                                                           "value": "",
                                                           "animation": {
                                                               "enable": false,
                                                               "speed": 0,
                                                               "sync": false
                                                           }
                                                       }
                                                   },
                                                   "twinkle": {
                                                       "lines": {},
                                                       "particles": {}
                                                   }
                                               }
                                           }
                                       }
                                   },
                                   "manualParticles": [],
                                   "motion": {
                                       "disable": false,
                                       "reduce": {
                                           "factor": 6,
                                           "value": true
                                       }
                                   },
                                   "particles": {
                                       "bounce": {
                                           "horizontal": {
                                               "random": {
                                                   "enable": false,
                                                   "minimumValue": 0.1
                                               },
                                               "value": 1
                                           },
                                           "vertical": {
                                               "random": {
                                                   "enable": false,
                                                   "minimumValue": 0.1
                                               },
                                               "value": 1
                                           }
                                       },
                                       "collisions": {
                                           "bounce": {
                                               "horizontal": {
                                                   "random": {
                                                       "enable": true,
                                                       "minimumValue": 2
                                                   },
                                                   "value": 2
                                               },
                                               "vertical": {
                                                   "random": {
                                                       "enable": true,
                                                       "minimumValue": 0.1
                                                   },
                                                   "value": 1
                                               }
                                           },
                                           "enable": true,
                                           "mode": "bounce"
                                       },
                                       "color": {
                                           "value": "#80edf9",
                                           "animation": {
                                               "enable": true,
                                               "speed": 12, //color changing speed
                                               "sync": false
                                           }
                                       },
                                       "life": {
                                           "count": 0,
                                           "delay": {
                                               "random": {
                                                   "enable": false,
                                                   "minimumValue": 0
                                               },
                                               "value": 0,
                                               "sync": false
                                           },
                                           "duration": {
                                               "random": {
                                                   "enable": false,
                                                   "minimumValue": 0.0001
                                               },
                                               "value": 0,
                                               "sync": false
                                           }
                                       },
                                       "links": {
                                           "blink": false,
                                           "color": {
                                               "value": "random"
                                           },
                                           "consent": false,
                                           "distance": 125,
                                           "enable": true,
                                           "frequency": 1,
                                           "opacity": 1,
                                           "shadow": {
                                               "blur": 5,
                                               "color": {
                                                   "value": "#00ff00"
                                               },
                                               "enable": false
                                           },
                                           "triangles": {
                                               "enable": false,
                                               "frequency": .5
                                           },
                                           "width": 1,
                                           "warp": false
                                       },
                                       "move": {
                                           "angle": {
                                               "offset": 45,
                                               "value": 90
                                           },
                                           "attract": {
                                               "enable": false,
                                               "rotate": {
                                                   "x": 3000,
                                                   "y": 3000
                                               }
                                           },
                                           "direction": "none",
                                           "distance": 0,
                                           "enable": true,
                                           "gravity": {
                                               "acceleration": 9.81,
                                               "enable": false,
                                               "maxSpeed": 50
                                           },
                                           "noise": {
                                               "delay": {
                                                   "random": {
                                                       "enable": false,
                                                       "minimumValue": 0
                                                   },
                                                   "value": 0
                                               },
                                               "enable": false
                                           },
                                           "outModes": {
                                               "default": "out"
                                           },
                                           "random": false,
                                           "size": false,
                                           "speed": 1.5, //Main Speed Control
                                           "straight": false,
                                           "trail": {
                                               "enable": false,
                                               "length": 10,
                                               "fillColor": {
                                                   "value": "#fff"
                                               }
                                           },
                                           "vibrate": false,
                                           "warp": false
                                       },
                                       "number": {
                                           "density": {
                                               "enable": true,
                                               "area": 800,
                                               "factor": 1000
                                           },
                                           "limit": 0,
                                           "value": 100
                                       },
                                       "opacity": {
                                           "random": {
                                               "enable": false,
                                               "minimumValue": 0.3
                                           },
                                           "value": .6,
                                           "animation": {
                                               "enable": false,
                                               "minimumValue": 0,
                                               "speed": 0.5,
                                               "sync": false
                                           }
                                       },
                                       "reduceDuplicates": false,
                                       "rotate": {
                                           "random": {
                                               "enable": true,
                                               "minimumValue": 1
                                           },
                                           "value": 3,
                                           "animation": {
                                               "enable": false,
                                               "speed": 0,
                                               "sync": false
                                           },
                                           "direction": "random",
                                           "path": false
                                       },
                                       "shadow": {
                                           "blur": 0,
                                           "color": {
                                               "value": "#000000"
                                           },
                                           "enable": false,
                                           "offset": {
                                               "x": 0,
                                               "y": 0
                                           }
                                       },
                                       "shape": {
                                           "options": {},
                                           "type": "circle"
                                       },
                                       "size": {
                                           "random": {
                                               "enable": false,
                                               "minimumValue": 1
                                           },
                                           "value": 3,
                                           "animation": {
                                               "destroy": "none",
                                               "enable": true,
                                               "minimumValue": 1,
                                               "speed": 3,
                                               "startValue": "max",
                                               "sync": false
                                           }
                                       },
                                       "stroke": {
                                           "width": 0,
                                           "color": {
                                               "value": "",
                                               "animation": {
                                                   "enable": false,
                                                   "speed": 0,
                                                   "sync": false
                                               }
                                           }
                                       },
                                       "twinkle": {
                                           "lines": {
                                               "enable": false,
                                               "frequency": 0.05,
                                               "opacity": 1
                                           },
                                           "particles": {
                                               "enable": false,
                                               "frequency": 0.05,
                                               "opacity": 1
                                           }
                                       }
                                   },
                                   "pauseOnBlur": false,
                                   "pauseOnOutsideViewport": true,
                                   "themes": []
                               }
                           }
                />
            </div>
        );
    }
}

export default MyParticles;