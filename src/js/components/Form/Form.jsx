import React from "react";
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";


/**
 * From component used insert a pick and drop address then performs callback on from complete action
 * @param pickAddress
 * @param dropAddress
 * @param setPickAddress
 * @param setDropAddress
 * @param isPickValid
 * @param isDropValid
 * @param onPickUpComplete
 * @param onDropOffComplete
 * @param isButtonEnabled
 * @param onJobCreate
 * @returns {JSX.Element}
 * @constructor
 */
const Form = ({ pickAddress,
                dropAddress,
                setPickAddress,
                setDropAddress,
                isPickValid,
                isDropValid,
                onPickUpComplete,
                onDropOffComplete,
                isButtonEnabled,
                onJobCreate }) => {


  return <div className="form">
    <div className="form-wrapper">
      <div className="form-row">
        <InputField value={pickAddress}
                    setValue={setPickAddress}
                    isValid={isPickValid}
                    placeholder={'Pick up address'}
                    iconsId={['ico-pick', 'ico-err-pick', 'ico-valid-pick']}
                    onBlurCallback={() => onPickUpComplete()} />
      </div>

      <div className="form-row">
        <InputField value={dropAddress}
                    setValue={setDropAddress}
                    isValid={isDropValid}
                    placeholder={'Drop off address'}
                    iconsId={['ico-drop', 'ico-err-drop', 'ico-valid-drop']}
                    onBlurCallback={() => onDropOffComplete()} />
      </div>

      <div className="form-row">
        <Button buttonDescription={'Create job'}
                isEnabled={isButtonEnabled}
                onClickFunction={() => onJobCreate()} />
      </div>
    </div>
  </div>
}

export default Form