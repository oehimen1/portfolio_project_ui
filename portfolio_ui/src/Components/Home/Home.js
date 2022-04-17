import './Home.css'
import React from 'react';
import { Container, Box } from '@mui/material';



export default function Home(){




    return(
        <Container style={{ paddingTop:'5px', height: '100vh'}}>
            <Container style={{ marginTop:'50px', backgroundColor: '#1b1b1b', height: '70vh', display:'flex'}}>
                <Box style={{ marginBottom:'50px', paddingTop:'70px' ,backgroundColor: '#4eb731', height: '45vh', width: '45vw'}}>
                    <img alt="profile" className="profile-pic" src="https://lh3.googleusercontent.com/yETmUVOkXElD7NySzbZ52KpiIbnYd8YjBjYoWt1urUZA_kgBEELjRBld1DSwM8HNtc8_vqQC7xxT-vXWV6c7J4wziTJlYsBcAt2HUCZ_h9NchjOIok85LZqsHfBIF6Durl-qhFbBBQ=w500-h315-p-k" /> 
                </Box>

                <p className ="homepage-des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor ligula, vehicula a lacinia eget, mattis a lacus. Sed blandit nisl vitae convallis suscipit. Vestibulum a pretium magna. Ut in mauris lacus. Etiam non sem et lectus tempor aliquam nec eu ipsum. Suspendisse suscipit elit in nisl condimentum mollis. Donec ornare fringilla libero, id dictum quam mollis quis. Curabitur quis leo mauris.
                </p>

            </Container>
                      
        </Container>
    
    )

}