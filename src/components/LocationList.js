import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

 const strToComponent = cities => (
 	cities.map( city => (<WeatherLocation key = {city} city={city}/>) )
 	);

 const LocationList = ({cities}) => {

 	return (<div className='locationList'>
 	 {strToComponent(cities)}
 	</div>);

 }

LocationList.propTypes = {
	cities: PropTypes.array
}

export default LocationList;