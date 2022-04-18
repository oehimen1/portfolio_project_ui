import './portfolio.css';
import React from 'react';
import { Container, Card, CardMedia, Stack, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';  


export default function Portfolio({  user, projects, error, isFetching }){
    const navigate=useNavigate()
    if (!user?.email) {
        navigate("/")
    }

    return(
        <Container style={{ paddingTop:'5px', height: '100vh'}}>
            <header >
                <h1>PORTFOLIO</h1>
            </header>
            <div className="bodyContent">
            {user?.email ? (
             <>
                <div className="feed">
                    {error ? <h2 className="error">{error}</h2> :null}
                    {isFetching ? <h2> Loading... </h2> :null}
                    <Stack direction="row" spacing={3}>
                        {projects?.map((project) =>(
                            <Card key={project.id} className="card" style={{ minWidth: 150, maxWidth:300 }}>
                                <CardMedia component="img" alt='project' image={project.image} height="200" />
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            <Button color="success" variant="outlined" href={project.url} target="_blank" >Visit</Button>
                            </Card> 
                        ))}  
                        <p className='projects_end'>More Coming Soon...</p>
                    </Stack>  
                </div>
                </>
            ) : (
                <>
                    <div className="NotAllowed">
                        <h2>You must be logged in to see this!</h2>
                        <span> Login <Link to="/login">here</Link></span>
                    </div>
                
                </>
            )}
            </div>
        </Container>
    )
}