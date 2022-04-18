import './Home.css'
import React from 'react';
import { Container, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Home(){

    return(
        <Container style={{ paddingTop:'5px', height: '100vh'}}>
            <Container style={{ marginTop:'50px', backgroundColor: '#1b1b1b', height: '70vh', display:'flex'}}>
                <Box style={{ marginBottom:'50px', paddingTop:'70px' ,backgroundColor: '#4eb731', height: '45vh', width: '45vw'}}>
                    <img alt="profile" className="profile-pic" src="https://lh3.googleusercontent.com/yETmUVOkXElD7NySzbZ52KpiIbnYd8YjBjYoWt1urUZA_kgBEELjRBld1DSwM8HNtc8_vqQC7xxT-vXWV6c7J4wziTJlYsBcAt2HUCZ_h9NchjOIok85LZqsHfBIF6Durl-qhFbBBQ=w500-h315-p-k" /> 
                </Box>
                <div>
                <p className ="homepage-des">
                    
                    This is my personal portfolio website where anyone is able to view my past projects, learn more about me, and view my resume to see my past work experience. 
                    I am hoping recuiters or anyone else viewing this are able to see my passion for creativity and tech. 
                    I expect this website to show you my interests in Software Development, Web Programming, and UX/UI. 
                
                </p>
                <div></div>
                <p className="socials_header">Follow my socials:</p>
                <div className="socials">
                    <a target="_black" href="https://www.linkedin.com/in/obehi-ehimen/"><LinkedInIcon/></a>
                    <a target="_black" href="https://github.com/oehimen1"><GitHubIcon/></a>
                </div>
                
                </div>
                

            </Container>
                      
        </Container>
    
    )

}