import logo from './logo.svg';
import './App.css';
import WeatherCard from './WeatherCard';
import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import api from './api';
function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const fetchWeather = async (cityName) => {
    try {
        const response = await api.get(`/WeatherForecast?cityName=${cityName}`);
        setWeatherData(response.data); // Assuming the backend returns weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
        setWeatherData(null); // Clear weather data on error
    }
};
  return (
    <div className="App App-header">
      <h1 style={{color:'darkgreen'}}>Weather App</h1>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item lg={6} md={6}>
          <TextField
            className='input'
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ width: '100%'}}
            slotProps={{
              input: {
                style: {
                  height: '50px', // Adjust the height here
                  padding: '10px',
                  color:'darkgreen' // Optional: Adjust padding for better alignment
                },
              },
              inputLabel: {
                style: {
                  fontSize: '16px',
                  color:'darkgreen',
                  borderColor:'darkgreen' // Optional: Adjust label font size
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'darkgreen', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'darkgreen', // Border color when focused
                },
              },
            }}
          />
        </Grid>
        <Grid item lg={6} md={6}>
          <Button
            variant="contained"
            color="success"
            onClick={() => fetchWeather(city)}
          >
            Get Weather
          </Button>
        </Grid>
      </Grid>
      {weatherData && <WeatherCard  weather={weatherData}/>}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
