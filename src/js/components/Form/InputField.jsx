import React from "react";
import { useIcoSwitcher } from "../../hooks/useIcoSwitcher.js";


/**
 * Input field component with custom ico and value validation
 * @param value {string} - represents input value
 * @param setValue {function} - function called when changing input value
 * @param iconsId {array<string>} - containing default ico, error ico and valid ico
 * @param placeholder {string} - text input placeholder
 * @param validExpressions {array<string>} - contains all expressions that trigger input field al valid
 * @param onBlurCallback {function} - function called on blur event
 * @returns {JSX.Element}
 * @constructor
 */
const InputField = ({ value = '',
                      setValue,
                      isValid = false,
                      iconsId = [],
                      placeholder = 'Type here',
                      onBlurCallback = a => a }) => {

  // icon switcher id setter
  const icoId = useIcoSwitcher(value, isValid, iconsId)

  return <>
    <span className="form-ico" id={icoId}/>
    <input className="form-input"
           value={value}
           onChange={(e) => setValue(e.target.value)}
           onBlur={() => onBlurCallback()}
           type="text"
           placeholder={placeholder}/>
  </>
}

export default InputField