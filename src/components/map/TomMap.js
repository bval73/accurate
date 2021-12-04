
import React, {useCallback, useEffect, useRef} from 'react';
import { useMap } from 'providers/MapProvider';


const TomMap = ({location}) => {
  let map = useRef(null);

  const { initMap, getGeoPosition, setCenter, addMarker, addPopUpMessage } = useMap();

  const getGeoLocation = useCallback((location) => {
    location &&
    getGeoPosition(location)
      .then(position => {
        setCenter(map.current, position);
        addMarker(map.current, position);
      })
      .catch(err => {
        addPopUpMessage(map.current, err)
      })
  }, [getGeoPosition, setCenter, addMarker, addPopUpMessage])

  useEffect(() => {
    getGeoLocation(location)
  }, [location, getGeoLocation]);

  useEffect(() => {
    map.current = initMap();
  }, [initMap]);

  return (
    <div id='acc-map'></div>
  );
}

export default TomMap;

