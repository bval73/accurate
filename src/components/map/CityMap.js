import React, { Component } from 'react';

//import { MapWithAGeocode } from './TomMap';

import { connect } from 'react-redux';
import {reloadMapFinish} from 'actions';
import * as poly from '../../polygon';
import LoadMap from './LoadMap';


class CityMap extends Component{

  reloadMapFinish() {
    this.props.dispatch(reloadMapFinish());
  }

  getFile(file) {
    // const fileName = poly + `.${file}`
    // return fileName;
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

  render() {
//    const { location, map: {isReloading} } = this.props;
    const { location } = this.props;
    const fileName = location.replace(/\s/g, "").replace('fl', "");
    const file = this.getFile(fileName);

    return(
      <LoadMap data={file} />
    )
  }
}

function mapStateToProps(state) {
  return {
    map:state.map
  }
}

export default connect(mapStateToProps)(CityMap);


