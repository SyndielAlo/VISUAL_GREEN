import React from 'react'
import { NavCom } from '../../navbar/NavCom'
import { Stack,Card, Typography,Button,CardMedia, Box } from '@mui/material'
import logo from './logo.png'; 



export const Index_Homendex = () => {
  return (
   <Stack>
    <NavCom></NavCom>

    <Card  sx={{objectPosition:"center", marginTop:"100px",position: 'absolute', top: 0, left:10 , marginLeft: '30px',padding:"18px"}}>

        <Typography variant="h3"  style={{ color: "#294B29", fontStyle:"Extrabold",marginBottom:"10px", fontWeight: "bold"}}>
        Welcome to Visual Green 
      </Typography>
      <Typography variant="h5" style={{ color: "#120366" ,marginBottom:"20px"}}>
          Your Gateway to a Greener Tomorrow!
      </Typography>
      <Typography variant="subtittle2" style={{ color: "#001524" ,marginBottom:"40px"}}>
      VisualGreen, an innovative environmental system designed to  monitor<br></br>
     <Typography style={{color: "#079236", fontStyle:"bold"}}> CO2 levels, UV light exposure, Temperature, and Humidity</Typography>
      through sensors, all geared towards optimizing your plant's growth<br></br>
      with the aid of data visualization tools within this web application.
      </Typography>
      
      <Stack direction={'row'} margin={9}>
        
      <Button  variant="outlined"style={{ marginRight: '30px' }}>Help</Button>
      <Button variant="outlined">LOGIN</Button>
    
      
     

      </Stack>
      
    </Card>

    <CardMedia
        
        sx={{  height: 500, maxWidth: 500 ,objectPosition:"center",marginBottom:"20px " ,marginTop:"60px",position: 'absolute', top: 0, right:10 , marginLeft: '100px'}}
        component="img"
        image={logo} // Use the imported image
        alt="Visual Green Logo"
        title="Logo"
      />

  
     
   </Stack>
  )
}
