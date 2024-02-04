import React from 'react';
import { Typography, Box, Card,Stack} from '@mui/material';
import DeviceThermostatTwoToneIcon from '@mui/icons-material/DeviceThermostatTwoTone';
import CloudQueueTwoToneIcon from '@mui/icons-material/CloudQueueTwoTone';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';

const SensorData = ({ temperature, humidity, co2, uv }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2,marginTop:5 ,marginLeft:2,marginRight:2}}>

  <Card sx={{ flexDirection: 'row', flexGrow: 1, backgroundColor: "yellow" , border: "2px solid #12372A", borderRadius: "8px",}}>
    <Typography variant="h6" gutterBottom marginTop={2}>
      Temperature: {temperature} °C
    </Typography>

    <Stack sx={{Direction: 'row', marginBottom:"30px",}}>
    <DeviceThermostatTwoToneIcon sx={{ fontSize: 60 }} ></DeviceThermostatTwoToneIcon>
    </Stack>

  </Card>

  <Card sx={{flexDirection: 'row', flexGrow: 1, backgroundColor: "yellow", border: "2px solid #12372A", borderRadius: "8px",}}>
    <Typography variant="h6" gutterBottom marginTop={2}>
      Humidity: {humidity} %
    </Typography>
    <Stack sx={{Direction: 'row', marginBottom:"30px", marginLeft:"10px"}}>
    < WaterDropOutlinedIcon sx={{ fontSize: 50 }}></ WaterDropOutlinedIcon>

    </Stack>
  </Card>

  <Card sx={{flexDirection: 'row', flexGrow: 1, backgroundColor: "yellow", border: "2px solid #12372A", borderRadius: "8px",}}>
    <Typography variant="h6" gutterBottom marginTop={2}>
      CO2: {co2} ppm
    </Typography>

    <Stack sx={{Direction: 'row', marginBottom:"30px", marginLeft:"10px"}}>
    < CloudQueueTwoToneIcon sx={{ fontSize: 50 }}></ CloudQueueTwoToneIcon>

    </Stack>
  </Card>

  <Card sx={{flexDirection: 'row', flexGrow: 1, backgroundColor: "yellow", border: "2px solid #12372A", borderRadius: "8px",}}>
    <Typography variant="h6" gutterBottom  marginTop={2}>
      UV: {uv}
    </Typography>
    <Stack sx={{Direction: 'row', marginBottom:"30px", marginLeft:"10px"}}>
    < Brightness5OutlinedIcon sx={{ fontSize: 50 }}></Brightness5OutlinedIcon>

    </Stack>
  </Card>
</Box>

  );
};

export default SensorData;
