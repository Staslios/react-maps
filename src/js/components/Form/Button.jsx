import React from "react";
import { useClassName } from "../../hooks/useClassName.js";


/**
 * Button component with active/inactive ui
 * @param buttonDescription {string} - string description to be showed inside button
 * @param isEnabled {boolean} - tells where is the button should be enabled or disabled
 * @param onClickFunction {function} - function to be called when button clicked
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ buttonDescription = 'Send',
                  isEnabled = false,
                  onClickFunction = a => a }) => {

  const className = useClassName('enabled', isEnabled)

  return <>
    <span className="form-ico"/>
    <button className={`form-button ${className}`}
            onClick={isEnabled? () => onClickFunction() : null} >
      {buttonDescription}
    </button>
  </>
}

export default Button