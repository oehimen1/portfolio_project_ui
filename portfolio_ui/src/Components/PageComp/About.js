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
                Hello, my name is Obehi Candace Ehimen and I am currently a junior at Georgia State University studying Computer Science. I am interested in Software Development, Web Programming, and UX/UI. 

                This is my personal portfolio page where anyone is able to view my past projects, learn more about me, and view my resume to see my past work experience. I have always wanted a personal portfolio page to show recruiters and such, but I never had the time too. It is a great “one stop shop” to view my work and to also express my creativity.

                For this website, I am using JavaScript, WordPress, Ajax, MySQL, etc..

                In this class, I learned about HTML, CSS, JavaScript, AJAX, MySQL, and my favorite --  WordPress.
                </p>

            </div>
        
        </Container>
  
    )
}