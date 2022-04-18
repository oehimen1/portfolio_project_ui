import './PageComp.css';
import React from 'react';
import { Container, Checkbox, FormGroup, FormControlLabel } from '@mui/material';



export default function Checklist(){


    return(
        <Container style={{ paddingTop:'5px', height: '100vh'}}>
            <header >
                <h1>CHECKLIST</h1>
            </header>
            <div className="bodyContent">
                <p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#000000','&.Mui-checked': { color: '#FFFFFF',},}}/>} label="Database Usage: Used in my login and register page to store members(users) of my website." />
                        <FormControlLabel  control={<Checkbox defaultChecked sx={{color: '#000000','&.Mui-checked': {color: '#FFFFFF',},}}/>} label="Ajax Usage: Used axios to support my ajax requests; you can see it in the portfolio page but one has to be logged in to see it." />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{color: '#000000', '&.Mui-checked': { color: '#FFFFFF',},}}/>} label="Theme: I used MaterialUI to have a consistent theme throughout my website." />
                        <FormControlLabel  control={<Checkbox defaultChecked sx={{color: '#000000','&.Mui-checked': {color: '#FFFFFF',},}}/>} label="New Library Usage: I used React,a JavaScript Library for bulding user interfaces,throughout this wbesite." />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{color: '#000000','&.Mui-checked': {color: '#FFFFFF',},}}/>}  label="JavaScript Usage: Instead of using HTML, CSS, and Javascipt separately, I decided to use React.js which helped me incorporate all three using components." />
                        <FormControlLabel  control={<Checkbox defaultChecked sx={{color: '#000000','&.Mui-checked': {color: '#FFFFFF',}, }}/>} label="Membership Usage: Once logged in and/or registered, members are allowed to view my resume and see my past projects." />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{color: '#000000','&.Mui-checked': { color: '#FFFFFF',},}}/>} label="General Use: Nonmebers are able to see what my website is about and learn a little more about me." />
                    </FormGroup>
                </p>

            </div>
            
          
        </Container>
    
    
    
    
    
    
    
    
    )





}