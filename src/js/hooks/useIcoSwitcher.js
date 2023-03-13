import { useEffect, useState } from "react";


/**
 * Custom hook that retrieves desired icon
 * @param value {string} value to check on
 * @param isValueValid {boolean} some external check that has been done outside this hook
 * @param iconParams {array<string>} array containing default, error and valid icon in this precise order
 * @returns {string} icon id (or class name)
 */
export const useIcoSwitcher = (value, isValueValid = true, iconParams) => {
  const [icoDefault, icoErr, icoValid] = iconParams

  const [icon, setIcon] = useState(icoDefault)

  useEffect(() => {

      // default status
    if (value.length === 0)
      setIcon(icoDefault)

      // status error
    else if (!isValueValid)
      setIcon(icoErr)

      // status ok
    else setIcon(icoValid)

  }, [value, isValueValid, iconParams])

  return icon
}