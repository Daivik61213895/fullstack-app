import React from 'react';
import { Grid } from '@mui/material';
import { WbSunny, Cloud, AcUnit } from '@mui/icons-material'; // Import MUI icons

const WeatherCard = ({ weather }) => {
    const getWeatherIcon = () => {
        switch (weather.weatherType) {
            case 'Sunny':
                return <WbSunny style={styles.icon} />;
            case 'Cloudy':
                return <Cloud style={styles.icon} />;
            case 'Snowy':
                return <AcUnit style={styles.icon} />;
            default:
                return <WbSunny style={styles.icon} />; // Default to Sunny
        }
    };
    const getDescriptionColor = () => {
        switch (weather.weatherType) {
            case 'Sunny':
                return 'orange';
            case 'Cloudy':
                return 'gray';
            case 'Snowy':
                return 'lightblue';
            default:
                return 'white';
        }
    };


    return (
        <Grid container style={styles.card} spacing={2}>
            {/* Weather Icon */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                {getWeatherIcon()}
            </Grid>

            {/* Temperature */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <h2 style={styles.temperature}>{weather.temperatureC}°C</h2>
                <p style={{ ...styles.description, color: getDescriptionColor() }}>
                    {weather.summary}
                </p>
                <p style={styles.location}>
                   Region: {weather.region}
                </p>
                <p style={styles.location}>
                    Country: {weather.countryName}
                </p>
            </Grid>

            {/* Description */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
            </Grid>
        </Grid>
    );
};

const styles = {
    card: {
        backgroundColor: '#52565C',
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    icon: {
        fontSize: '80px',
        color: 'orange',
    },
    temperature: {
        fontSize: '24px',
        margin: '8px 0',
        color: 'white',
    },
    description: {
        fontSize: '16px'
    },
    location: {
        fontSize: '16px',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    },
};

export default WeatherCard;