import React, { useState } from 'react';
import { Stack, TextField, Button, Card,CardMedia  } from '@mui/material';
import Green from './Green.png';
import backgroundImage from './pn.jpg';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    deviceName: '',
    password: '',
    email: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <Card spacing={2} sx={{  backgroundColor: "#FFFFFF",
    height: "460px",
    width: "410px",
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    marginLeft: "520px",
    marginBottom:"100px",
    border: "2px solid #12372A",
    borderRadius: "8px", }}>

     <CardMedia 
        component="img"
        image={Green}
        alt="Green" 
        style={{ marginLeft:" 80px",height: 60, maxWidth: 250, objectPosition: "center" }}
       > 
        </CardMedia>

    <form onSubmit={handleSubmit}>
      <Stack>
      
        <TextField
          
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{marginBottom:"10px",direction:"row", margin:"10px"}}
        />
       
        <TextField
          
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{marginBottom:"10px",direction:"column", margin:"10px"}}
        />
         <TextField
          
          label="Device Name"
          variant="outlined"
          name="deviceName"
          value={formData.deviceName}
          onChange={handleChange}
          style={{marginBottom:"10px",direction:"column", margin:"10px"}}
        />
        </Stack>
        <Stack direction={"row"}>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{marginBottom:"10px",direction:"row", margin:"10px"}}
        />

        <TextField
          
          label="Confirm Password"
          type="password"
          variant="outlined"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{marginBottom:"10px",direction:"column", margin:"10px"}}
        />
         </Stack>
         <Stack sx={{marginBottom:"30px", margin:"10px"}}>
         <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        </Stack>
        

         <Stack sx={{marginBottom:"30px", margin:"20px"}}>
         <Button  variant="text" color="primary">
          Already Had Account?
        </Button>
        </Stack>

    </form>
    </Card>
    </div>
  );
};

export default Register;
