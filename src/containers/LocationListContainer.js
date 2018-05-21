import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListComponent extends Component {

     handleSelectionLocation = city => {
  		this.props.setCity(city);
  	}	

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

const mapDispatchToProps = dispatch => ({
		setCity: value => dispatch(setCity(value))
});

LocationListComponent.propTypes = {
        setCity: PropTypes.func.isRequired,
        cities: PropTypes.array.isRequired
};

export default connect(null, mapDispatchToProps)(LocationListComponent);
