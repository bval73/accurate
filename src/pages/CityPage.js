import React, { Component } from 'react';
import CityMap from 'components/map/CityMap';

class CityPage extends Component {
  constructor() {
    super();
    this.state = {
      city:'' 
    }
  }
  
  getCity() {
    let currentCity = window.location.href.split("/").pop().split("-");
    let city = '';
    const cityLength = currentCity.length;

    switch(cityLength) {
      case 3:
        city = currentCity[2].charAt(0).toUpperCase() + currentCity[2].slice(1);
        break;
      case 4:
        city = currentCity[2].charAt(0).toUpperCase() + currentCity[2].slice(1) + ' ' + currentCity[3].charAt(0).toUpperCase() + currentCity[3].slice(1);
        break;
      case 5: 
        city = currentCity[2].charAt(0).toUpperCase() + currentCity[2].slice(1) + ' ' + currentCity[3].charAt(0).toUpperCase() + currentCity[3].slice(1) + ' ' + currentCity[4].charAt(0).toUpperCase() + currentCity[4].slice(1);
        break;      
      default: return false;
    }
    return city;
  }

  render() {
    const city = this.getCity();
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

