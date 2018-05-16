import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => (
	<div>
		<div>{weekDay} Hora: {hour}</div>
		<WeatherData data={data}></WeatherData>
	</div>
);

ForecastItem.prototypes = {
	weekDay: PropTypes.string.isRequired,
	hour:PropTypes.number.isRequerid,
	data: PropTypes.shape({
		temperature:PropTypes.number.isRequerid,
		weatherState:PropTypes.string.isRequerid,
		humidity:PropTypes.number.isRequerid,
		wind:PropTypes.string.isRequerid
	})
}

export default ForecastItem;