

import React, { Component } from 'react';
import tt from '@tomtom-international/web-sdk-maps';



class LoadMap extends Component {
  
  insertMap() {
    const {type, coords, center, zoom } = this.props.data;
    console.log('the props are ', this.props)
    let zom = zoom ? zoom : 11
    console.log('the data is ',this.props);
    const map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: 'map',
      zoom: zom,
      center: center
//      dragPan: !isMobileOrTablet()
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
    map.on('load', function() {
      map.addLayer({
          'id': 'overlay',
          'type': 'fill',
          'source': {
              'type': 'geojson',
              'data': {
                  'type': 'Feature',
                  'geometry': {
                      'type': type,
                      'coordinates': coords
                  }
              }
          },
          'layout': {},
          'paint': {
              'fill-color': '#abceba',
              'fill-opacity': 0.5,
              'fill-outline-color': 'black'
          }
      });
    });
  }

  componentDidMount() {
    this.insertMap();
  }

  render() {
    return (
      
      <div id='map' className='map'></div>
    );
  }
}

export default LoadMap;

