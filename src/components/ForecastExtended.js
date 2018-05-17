import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/*const days = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes'
];

const data = {
	temperature:10,
	humidity:10,
	weatherState:'Normal',
	wind: 'Normal'
}*/

const apiKey = "ed9e24bff97b4dfac1a4d692aadbf231";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

	constructor(){
		super();
		this.state = { forecastData: null};
	}

	componentDidMount(){
		this.updateCity(this.props.city);
	}

	componentWillReceiveProps(nextProps){
		if( nextProps.city !== this.props.city){
			this.setState({forecastData: null}) 
			this.updateCity(nextProps.city);
		}

	}

	updateCity = city => {
		const forecastUrl = `${url}?q=${city}&APPID=${apiKey}`; 
		fetch(forecastUrl).then (
			data => {
			return data.json();
		}).then( 
		    weatherData => {
		    const forecastData = transformForecast(weatherData);
		    console.log(forecastData);
			this.setState({forecastData});
		});
	}

	renderForecastItemDays(forecastData) {
		return forecastData.map( forecast => 
			<ForecastItem 
			    key={`${forecast.weekDay}${forecast.hour}`} 
				weekDay={forecast.weekDay} 
				hour={forecast.hour} 
				data={forecast.data}>
			</ForecastItem>);
	}

	renderProgress = () => {
		return <h3>"Cargando Pronóstico Extendido..."</h3>;
	}

	render(){
		const { city } = this.props;
		const { forecastData } = this.state;

		return (
				<div>
					<h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
					{ forecastData ?
					  this.renderForecastItemDays(forecastData) :
					  this.renderProgress()
					}
				</div>
			);
	}
}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

export default ForecastExtended;