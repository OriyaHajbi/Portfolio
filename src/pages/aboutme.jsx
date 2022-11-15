import React from 'react';
import Typed from "react-typed"
import "../css/aboutme.css";

function AboutMe(props) {
    return (
        <div id='aboutme' className={`sizePage ${props.modeClass}backgroundModeaboutme`}>
            <div className={`animText ${props.modeClass}aboutme`}>
                <Typed
                    strings={[
                        "I'm Oriya Hajbi.",
                        "I'm a Full Stack Developer!",
                        "I'm a Backend Developer!"
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                />
            </div>
            <div className='imgaboutme' >
                <img src='https://github.com/OriyaHajbi/Portfolio/blob/master/public/photos/me.jpeg?raw=true' alt='Oriya' />
            </div>

            <div className={`aboutText ${props.modeClass}aboutme`}>
                <span>
                    <p>Hello, my name is Oriya Hajbi and i'm 27 years old. </p>
                    <p>I'm Computer Science graduate from Afeka - Tel-Aviv Academic Collage of Engineering.</p>
                    <p>I traveled in South and Central America for seven and a half months.</p>
                    <p>I have been to eleven countries: Argentina, Chile, Brazil, Peru, Bolivia, Colombia, Mexico, Belize, Guatemala, Costa Rica and Panama.</p>
                    <p>I love animals, I have a dog 🐶 and a parrot 🦜.</p>
                </span>
            </div>
        </div>

    );
}

export default AboutMe;

