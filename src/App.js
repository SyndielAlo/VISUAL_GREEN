import './App.css';
import { NavCom } from './navbar/NavCom';
import { Index_Homendex } from './pages/Home';
import { LoginForm } from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/dashboard/Dashboard'; 
import { Stack } from '@mui/material';

function App() {
  const temperature = 25;
  const humidity = 50;
  const co2 = 400;
  const uv = 'high';
  return (
    <Stack className="App">
   <Dashboard 
      temperature={temperature}
      humidity={humidity}
      co2={co2}
      uv={uv}/> 
    </Stack>
    
  );
}

export default App;
