import React, { useRef } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';


const { createContext, useContext } = React;

const MapContext = createContext(null);

//childrem and dispatch from props
export const MapProvider = ({children}) => {
  const cache = useRef({});

  const normalizeLocation = (location) => {
    return location.replace(/\s/g,'').toLowerCase(); //remove spaces
  }

  const cacheLocation = (location, position) => {
    const locationKey = normalizeLocation(location);
    return cache.current[locationKey] = position;
  }

  const getCachedLocation = (location) => {
    const locationKey = normalizeLocation(location);
    return cache.current[locationKey]; 
  }

  const initMap = () => {
    const map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: 'acc-map',

      zoom:13,
      scrollZoom: false
    });
    return map;
  }  

  const setCenter = (map, position) => {
    map.setCenter(new tt.LngLat(position.lon, position.lat));
//    addMarker(map, position);
  }

  const addMarker = (map, position) => {
    const markerDiv =   document.createElement('div');
    markerDiv.className = 'acc-marker';
// eslint-disable-next-line    
    const marker = new tt.Marker({
      element: markerDiv
    })
    .setLngLat([position.lon, position.lat])
    .addTo(map);
  }

  const addPopUpMessage = (map, message) => {
    new tt.Popup({className: 'acc-popup', closeButton: false, closeOnClick: false})
      .setLngLat(new tt.LngLat(0,0))
      .setHTML(`<p>${message}</p>`)
      .addTo(map)
  }

  const locationNotFound = () => Promise.reject('Location not found'); 

  const getGeoPosition = (location) => {
    const cachedPosition = getCachedLocation(location);
    return cachedPosition ? Promise.resolve(cachedPosition) : requestGeoLocation(location);
  }

  const requestGeoLocation = location => {
    //check cache for location first
    return axios
      .get(`https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${process.env.REACT_APP_TOMTOM_API_KEY}`)
      .then(res => res.data)
      .then(tomRes =>{
        const results = tomRes.results;
        if(results && results.length > 0) {
          const { position } = results[0];
          // store results in cache
          cacheLocation(location, position);
          return position;
        }
        // no results
        return locationNotFound();
      })
      .catch(() => locationNotFound())
  }


  const mapApi = {
    initMap,
    getGeoPosition,
    setCenter,
    addMarker,
    addPopUpMessage
//    makePolygon
  }

  return (
    <div>
      <MapContext.Provider value={mapApi}>
        {children}
      </MapContext.Provider>
    </div>
  );
}

export const AuthProvider = connect()(MapProvider);

//cannot use in class component
export const useMap = () => {
  return useContext(MapContext);
}

