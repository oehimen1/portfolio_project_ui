import './footer.css';
import React from 'react';
import { Container } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer(){

    return(
        <Container style={{ backgroundColor: '#1b1b1b', height: '8vh', maxWidth:'none'}}>
            <p className="footer_text">CopyRight <CopyrightIcon/> Obechi C Ehimen. All Rights Reserved</p>
        </Container>
  
    )
}