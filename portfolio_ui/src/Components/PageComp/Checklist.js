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
                        <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="Database Usage" />
                        <FormControlLabel  control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="Ajax Usage" />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="Theme" />
                        <FormControlLabel  control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="New Library Usage" />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="JavaScript Usage" />
                        <FormControlLabel  control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="Membership Usage" />
                        <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: '#000000',
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        }}/>} label="General Use" />
                    </FormGroup>
                </p>

            </div>
            
          
        </Container>
    
    
    
    
    
    
    
    
    )





}