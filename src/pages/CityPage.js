import React, { Component } from 'react';
import CityMap from 'components/map/CityMap';

class CityPage extends Component {

  getCity() {
    let currentCity = window.location.href.split("/").pop().split("-");
    let city = '';
//    let cityMap = '';
    const cityLength = currentCity.length;

    switch(cityLength) {
      case 4:
        city = currentCity[2].charAt(0).toUpperCase() + currentCity[2].slice(1);
        break;
      case 5:
        city = currentCity[2].charAt(0).toUpperCase() + currentCity[2].slice(1) + ' ' + currentCity[3].charAt(0).toUpperCase() + currentCity[3].slice(1);
        break;
      case 6:
        city = currentCity[2].charAt(0).toUpperCase() + currentCity[2].slice(1) + ' ' + currentCity[3].charAt(0).toUpperCase() + currentCity[3].slice(1) + ' ' + currentCity[4].charAt(0).toUpperCase() + currentCity[4].slice(1);
//        cityMap = currentCity[2]+'+'+currentCity[3]+'+'+currentCity[4]+'+fl';
    }
    return city;
  }

  render() {
    let city = this.getCity();
    
    return (
      <div className='row'>
        <h1>Top Rated Pressure Washing Service in {city} FL</h1>
        <div className='col-md-6'>
          {city}
        </div>
        <div className='col-md-6'>
          <CityMap location={`${city} fl`} />
        </div>
      </div>
    );
  }
}

export default CityPage;
