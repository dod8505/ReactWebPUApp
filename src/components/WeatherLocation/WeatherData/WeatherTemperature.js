import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {CLOUD, 
		CLOUDY,
		SUN,
		RAIN,
		SNOW,
		WINDY,
	    THUNDER,
	    DRIZZLE} from './../../../constants/weathers';

//Retorna nombre del icono temp
const stateToIconName = weatherState => {
	switch(weatherState){
		case CLOUD:
		     return "cloud";
		case CLOUDY:
		     return "cloudy";
		case SUN:
		     return "day-sunny";
		case RAIN:
		     return "cloud";
		case SNOW:
		     return "snow";
		case WINDY:
		     return "windy";
		case THUNDER:
		     return "day-thunderstorm";
		case DRIZZLE:
		     return "day-showers";
		default:
			return "day-sunny";
	}
}

const getWeatherIcon = weatherState => { 
	
	return (<WeatherIcons className='wIcon' name={stateToIconName(weatherState)} size="4x" />);

}

//Dibuja info temperatura y clima
const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherTemperatureCont'> 
    {getWeatherIcon(weatherState)}
    <span className='temperature'>{`${temperature}`}</span>
    <span className='temperatureType'>C°</span>
  </div>
);

WeatherTemperature.propTypes = {
	temperature:PropTypes.number,
	weatherState : PropTypes.string
};

export default WeatherTemperature;
