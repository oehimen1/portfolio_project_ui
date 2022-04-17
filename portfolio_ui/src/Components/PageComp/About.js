import './PageComp.css';
import React from 'react';
import { Container } from '@mui/material';

export default function About(){

    return(
        <Container style={{ paddingTop:'5px', height: '100vh'}}>
            <header >
                <h1>ABOUT</h1>
            </header>
            <div className="bodyContent">
                <p>
                    I am Obehi Candace Ehimen and this is my portfolio website to showcase my projects, show my interest in tech, 
                    ,and for people to have easier access to my resume. I am a junior majoring in Computer Science
                    at Georgia State University. For this website, I am using JavaScript, WordPress, Ajax, MySQL, etc..
                    In this class, I learned about HTML, CSS, JavaScript, AJAX, MySQL, and my favorite --  WordPress.
                </p>

            </div>
        
        </Container>
  
    )
}