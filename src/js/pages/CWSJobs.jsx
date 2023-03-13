import React from "react";
import Form from "../components/Form/Form.jsx";
import PopUp from "../components/PopUp/PopUp.jsx";
import Map from "../components/Map/Map.jsx";
import { useInputField } from "../hooks/useInputField.js";
import { useToggleMarker } from "../hooks/useToggleMarker.js";
import { usePopUp } from "../hooks/usePopUp.js";
import { pointers } from "../constants/markerPointers.js";
import { dropOffMarker, pickUpMarker } from "../properties/leafletMarkers.js";


const CWSJobs = () => {

  // pick up address state value
  const {
    value: pickAddress,
    isValid: isPickValid,
    setValue: setPickAddress
  } = useInputField(pointers)

  // drop off address state value
  const {
    value: dropAddress,
    isValid: isDropValid,
    setValue: setDropAddress
  } = useInputField(pointers)

  // markers state
  const {markers, setMarkers, resetMarkers} = useToggleMarker([
    {name: pickAddress, ico: pickUpMarker},
    {name: dropAddress, ico: dropOffMarker}
  ])

  // pop up state
  const {showPopUp, togglePopUp} = usePopUp()

  // wrapper function reset on job complete
  function jobCreate() {
    togglePopUp(); // shows pop up message
    setPickAddress(''); // resets pick address
    setDropAddress(''); // resets drop address
    resetMarkers() // resets markers on map
  }

  return <div className="cws-page">
    <div className="cws-wrapper">
      <Form pickAddress={pickAddress}
            dropAddress={dropAddress}
            setPickAddress={setPickAddress}
            setDropAddress={setDropAddress}
            isPickValid={isPickValid}
            isDropValid={isDropValid}
            onPickUpComplete={setMarkers}
            onDropOffComplete={setMarkers}
            isButtonEnabled={markers.length >= 2}
            onJobCreate={() => jobCreate()}/>
      <PopUp showPopUp={showPopUp}/>
      <Map markers={markers}/>
    </div>
  </div>
}

export default CWSJobs