import L from "leaflet";


// creates custom 'pick up' marker to use with react leaflet api
export const pickUpMarker = L.icon({
  iconUrl: '/icons/pickUpMarker.svg',

  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// creates custom 'drop off' marker to use with react leaflet api
export const dropOffMarker = L.icon({
  iconUrl: '/icons/dropOffMarker.svg',

  iconSize:     [38, 95], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});