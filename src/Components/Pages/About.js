import React from 'react';
import Ginge from '../IMGS/ginge.png';


function About() {
    return (
        <React.Fragment>
            <h1>About!</h1>
            <p>This is my Todo List app. It is part of
                a React crash course. </p>
            
            <img src={Ginge} alt="A ginger kitty" />

        </React.Fragment>
    )
}

export default About;
