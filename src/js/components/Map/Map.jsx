import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerList from "./MarkerList.jsx";


const Map = ({ markers = []}) => {

  return <MapContainer center={[48.8665, 2.3280]} zoom={15} scrollWheelZoom={true}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    {markers.length > 0 && <MarkerList markers={markers}/>}
  </MapContainer>
}

export default Map