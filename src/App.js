import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
'Buenos Aires, AR',
'Bogota, COL',
'Santiago, CL',
'Madrid, ES'
];


class App extends Component {

  constructor(){
  	super();
  	this.state = {
  		city: null
  	};
  }

  handleSelectionLocation = city => {
  	this.setState( { city } );
  	console.log(`handleSelectionLocation ${city}`);
  }	

  render() {

  	const { city } = this.state;

    return (
      <MuiThemeProvider>
	      <Grid>
	        <Row className="show-grid">
	            <Col xs={12} md={12} lg={12}>
					<Navbar>
					  <Navbar.Header>
					    <Navbar.Brand>
					      <a href="#home">Weather App</a>
					    </Navbar.Brand>
					  </Navbar.Header>
					  <Nav>
					    <NavItem eventKey={1} href="#">
					      Link
					    </NavItem>
					  </Nav>
					</Navbar>
	        	</Col>
	        </Row>
	       	<Row className="show-grid">
	       		<Col xs={12} md={6}>
	        		<LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
	        	</Col>
	        	<Col xs={12} md={6}>
	        		<Paper zDepth={4}>
	        			<div className="detail">
	        			 {
	        			 	city &&
	        			 	<ForecastExtended city={city}></ForecastExtended>
	        			 }
	        			</div>
	        		</Paper>
	        	</Col>
	      	</Row>
	      </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
