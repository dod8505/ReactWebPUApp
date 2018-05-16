import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import TransformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';

const apiKey = "ed9e24bff97b4dfac1a4d692aadbf231";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {

	constructor({city}) {
		super();
		this.state = {
			city,
			data: null
		};
	}

	componentWillMount(){
		const {city} = this.state;
		const apiWeatherUrl = `${url}?q=${city}&APPID=${apiKey}`; 
		fetch(apiWeatherUrl).then (data => {
			console.log(apiWeatherUrl)
			return data.json();
		}).then(weatherData => {
			const data = TransformWeather(weatherData);
			this.setState({data});
		});
	}

	render = () => {
		const {onWeatherLocationClick} = this.props;
		const {city, data} = this.state;
		  return (
		  <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
		    <Location city={city}/>
		    { data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7} />}
		  </div>);
	};
}

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
