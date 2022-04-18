import './Navbar.css';
import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';  
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Marquee from "react-fast-marquee";

export default function Navbar({ user, handleLogout }){
    return(
        <Container style={{ backgroundColor: '#1b1b1b', height: '12vh', maxWidth:'none'  ,paddingLeft:0, paddingRight:0, marginLeft:0, marginRight:0}}>
            <nav>
                <div className='nav'>
                
                    <div className='site-brand'>
                        <h1>OBEHI C EHIMEN</h1>
                    </div>
                
                    <ul className="navbar-titles">
                        <li><Link  to="/">HOME</Link></li>
                        <li><Link  to="/about">ABOUT</Link></li>
                        <li><Link  to="/description">DESCRIPTION</Link></li>
                        <li><Link  to="/checklist">CHECKLIST</Link></li>
                        {user?.email ? (
                        <>
                            <li><Link  to="/portfolio">PORTFOLIO</Link></li>
                            <PictureAsPdfIcon/><li><a target="_blank" rel="noreferrer"href='https://drive.google.com/file/d/1hzjPveLnhKlm5tKGi46AC1Zx9djj_WRn/view?usp=sharing'>RESUME</a></li>
                            <li><span className="logout" onClick={handleLogout}>LOGOUT</span></li>

                        </>
                        ) : (
                        <>
                            <li><Link  to="/login">LOGIN</Link></li>
                            <li><Link  to="/register">SIGN UP</Link></li> 
                        </>
                        )}
                    </ul> 

                </div>
                <border></border>
                {user?.email ? (
                <>
                <Marquee pauseOnHover='true' speed='35' style={{backgroundColor: "#FFFFFF"}}>
                    Hello {user.first_name}, welcome to my portfolio website!   Feel free to download my resume or visit my past projects!
                </Marquee>
                </>
                 ) : (
                    <>
                     <Marquee pauseOnHover='true' speed='35' style={{backgroundColor: "#FFFFFF"}}>
                    Hello {user.first_name}, welcome to my portfolio website! Please take a look around. To view my portfolio and view my resume please login..
                </Marquee>
                </>
                )}
            </nav>
        </Container>
    )
}