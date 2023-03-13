import { useState } from "react";
import { pointers } from "../constants/markerPointers.js";


/**
 * Custom hook that searches c
 * @param addressesFound
 * @returns {{resetMarkers: (function(): void), setMarkers: (function(): void), markers: *[]}}
 */
export const useToggleMarker = (addressesFound = []) => {
  const [markers, setMarkers] = useState([])

  // searches for required pointer by string name
  function getMarkersFromPointer() {

    const markersFound = []

    addressesFound.forEach(address => {
      const {name, ico} = address

      const pointer = pointers.find(pointer => pointer.name === name)
      if (pointer)
        markersFound.push({...pointer, ico})
    })

    return markersFound
  }

  return {
    markers,
    setMarkers: () => setMarkers(getMarkersFromPointer()),
    resetMarkers: () => setMarkers([])
  }
}