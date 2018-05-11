import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
  
  const { temperature, weatherState, humidity, wind } = data;

  return(<div className='weatherDataCont'>
    <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
    <WeatherExtraInfo humidity = {humidity} wind={wind}/>
  </div>);
};

WeatherData.propTypes = {
	data: PropTypes.shape({
		temperature:PropTypes.number.isRequerid,
		weatherState:PropTypes.string.isRequerid,
		humidity:PropTypes.number.isRequerid,
		wind:PropTypes.string.isRequerid
	})
}

export default WeatherData;
