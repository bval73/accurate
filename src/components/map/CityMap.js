
import React, { Component } from 'react';

import tt from '@tomtom-international/web-sdk-maps';
import { connect } from 'react-redux';

import * as poly from '../../polygon';

class CityMap extends Component{

  constructor() {
    super();

    this.state = {
      map:{},
      local:'',
      fileName:'',
      reload:true,
      file:{}
    };
    const local = '';
    const fileName = ''; 
    const file = {};
  }

  updateState() {
    this.setState({
      ...this.state,
      file:this.file,
      fileName:this.fileName,
      local:this.local,
      reload:true
    }, () => {
      this.insertMap();
    });
  }

  componentDidMount() {
    this.local = this.props.location;
    this.fileName = this.local.replace(/\s/g, "").replace('fl', ""); 
    this.file = this.getFile(this.fileName);
    this.insertMap();
  }

  getFile(file) {
    switch (file) {
      case 'DadeCity':
        return poly.DadeCity;
      case 'Odessa':
        return poly.Odessa;
      case 'Zephyrhills':
        return poly.Zephyrhills
      case 'LandOLakes':
        return poly.LandOLakes
      case 'NorthDadeCity':
        return poly.NorthDadeCity;
      case 'WesleyChapel':
        return poly.WesleyChapel
      case 'StLeo':
        return poly.StLeo
      case 'SanAntonio':
        return poly.SanAntonio
      case 'ZephyrhillsWest':
        return poly.ZephyrhillsWest
      case 'Trilby':
        return poly.Trilby
      case 'Lacoochee':
        return poly.Lacoochee
      case 'CrystalSprings':
        return poly.CrystalSprings
      case 'Kathleen':
        return poly.Kathleen
      case 'Webster':
        return poly.Webster
      case 'Thonotosassa':
        return poly.Thonotosassa
      case 'Brooksville':
        return poly.Brooksville
      case 'Lutz':
        return poly.Lutz
      case 'Nobleton':
        return poly.Nobleton
      case 'PlantCity':
        return poly.PlantCity
      case 'Bushnell':
        return poly.Bushnell
      case 'Seffner':
        return poly.Seffner
      case 'SpringHill':
        return poly.SpringHill
      case 'Tampa':
        return poly.Tampa
      default:
        return poly.DadeCity;
    }
  }

  componentDidUpdate(){
    this.local = this.props.location;
    this.fileName = this.local.replace(/\s/g, "").replace('fl', ""); 
    this.file = this.getFile(this.fileName);
    if(this.fileName != this.state.fileName || this.state.local === ''){
      this.updateState();
    }
  }

  insertMap() {
    document.getElementById("map").innerHTML = "";
    this.local = this.props.location;
    this.file = this.getFile(this.fileName);
    this.fileName = this.local.replace(/\s/g, "").replace('fl', "");
    const {type, coords, center, zoom } = this.file;

    let zom = zoom ? zoom : 11;
    const map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: 'map',
      zoom: zom,
      center: center
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

  render() {
    return (
      <div id='map' className='map'></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    map:state.map,
    file:state.file
  }
}

export default connect(mapStateToProps)(CityMap);


