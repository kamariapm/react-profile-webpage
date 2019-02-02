import React, { Component } from 'react';
import javascriptLogo from '../javascript.png';
import htmlLogo from '../html.png';
import bootstrapLogo from '../bootstrap.png';
import cssLogo from '../css.png';
import expressLogo from '../express.png';
import mlabLogo from '../mlab.png';
import mongodbLogo from '../mongodb.png';
import mongooseLogo from '../mongoose.png';
import nodeLogo from '../node.png';
import pugLogo from '../pug.jpg';
import reactLogo from '../react.png';
import githubLogo from '../github.png';
import { MDBContainer } from "mdbreact";


class Experience extends Component {
    render() {
        return (
            <div className="Experience" style={containerExperienceStyle}>
                <h1 style={{ textAlign: 'center' }}>EXPERIENCE</h1>
                <MDBContainer>
                    <img src={htmlLogo} alt=" " />
                    <img src={cssLogo} alt=" " />

                    <img src={javascriptLogo} alt=" " />
                    <img src={bootstrapLogo} alt=" " />

                    <img src={reactLogo} alt=" " />
                    <img src={pugLogo} alt=" " style={{ borderRadius: '25px' }} />


                    <img src={githubLogo} alt=" " />
                    <img src={nodeLogo} alt=" " />

                    <img src={mongooseLogo} alt=" " />
                    <img src={expressLogo} alt=" " />

                    <img src={mongodbLogo} alt=" " />
                    <img src={mlabLogo} alt=" " />
                </MDBContainer>
            </div>

        );
    }
}

const containerExperienceStyle = {
    marginTop: '6%',
    marginLeft:'-2%',
    padding: '2%',
}

// const containerLeft = {
//     marginLeft: '-18%',
//     marginTop: '10%',
// }




export default Experience;