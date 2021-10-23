import React, { Component } from 'react';

import { MapWithAGeocode } from './GoogleMap';

import { connect } from 'react-redux';

import * as actions from 'actions';

class CityMap extends Component{

  reloadMapFinish() {
    this.props.dispatch(actions.reloadMapFinish());
  }

  render() {
    const { location, map: {isReloading} } = this.props;
    //const { location } = this.props;
    console.log('the location is ', location);
    return(
      <MapWithAGeocode
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `405px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
        isReloading={isReloading}
        mapLoaded={() => this.reloadMapFinish()}
      />

//       <iframe
//   width="450"
//   height="250"
//   frameBorder="0" 
//   style={{border:0}}

//   src="https://www.google.com/maps/embed/v1/view?key=YOUR_KEY_HERE&center=28.3582411,-82.2208385">
// </iframe>
    )
  }
}

function mapStateToProps(state) {
  return {
    map:state.map
  }
}

export default connect(mapStateToProps)(CityMap);


