import React from 'react';
import WeatherLocation from './WeatherLocation';

 const LocationList = () => (

 	<div>
 	 <WeatherLocation city={'Buenos Aires, AR'}/>
 	 <WeatherLocation city={'Bogota, COL'}/>
 	 <WeatherLocation city={'Santiago, CL'}/>
 	</div>

 )


export default LocationList;