import { Marker, Popup } from "react-leaflet";
import React from "react";


/**
 * Custom marker that extends Market leaflet react component
 * @param icon {object} - see @ https://leafletjs.com/examples/custom-icons/
 * @param position {array<number>} - see @https://react-leaflet.js.org/docs/example-popup-marker/
 * @param description {string} - Marker description when clicked
 * @returns {JSX.Element}
 * @constructor
 */
const CustomMarker = ({icon, position = [], description}) => {

  return <Marker icon={icon} position={position}>
    {description && <Popup>{description}</Popup>}
  </Marker>
}


/**
 * Takes an array on markers object properties and returns leaflet markers
 * @param markers {array<object>}
 * @returns {JSX.Element|unknown[]}
 * @constructor
 */
const MarkerList = ({markers = []}) => {

  return markers.map(marker => <CustomMarker key={marker.coords.join()}
                                             icon={marker.ico}
                                             position={marker.coords}
                                             description={marker.name}/>)

}

export default MarkerList