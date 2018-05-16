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
		const forecastUrl = `${url}?q=${this.props.city}&APPID=${apiKey}`; 
		fetch(forecastUrl).then (
			data => {
			return data.json();
		}).then( 
		    weatherData => {
		    const forecastData = transformForecast(weatherData);
			this.setState({forecastData});
		});
	}

	renderForecastItemDays() {
		return <h3>Render Item</h3>
		//return days.map( day => <ForecastItem key={day} weekDay={day} hour={'10'} data={data}></ForecastItem>);
	}

	renderProgress = () =>{
		return <h3>"Cargando Pronóstico Extendido..."</h3>;
	}

	render(){
		const { city } = this.props;
		const { forecastData } = this.state;

		return (
				<div>
					<h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
					{ forecastData ?
					  this.renderForecastItemDays() :
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