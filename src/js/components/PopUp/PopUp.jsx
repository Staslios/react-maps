import React from "react";
import { useClassName } from "../../hooks/useClassName.js";


/**
 *
 * @param showPopUp tells whether show pop up message
 * @returns {JSX.Element}
 * @constructor
 */
const PopUp = ({showPopUp = false}) => {

  const className = useClassName('fade-out', !showPopUp)

  return <div className={`popup ${className}`}>
    Job has been created successfully!
  </div>
}

export default PopUp