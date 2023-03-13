import { useEffect, useState } from "react";


/**
 * Custom hook used to store input text value with external call on order to provide value onChange event
 * @returns {{setValue: (function(*): void), value: string}}
 */
export const useInputField = (validPointers = []) => {

  // value state
  const [value, setValue] = useState('')

  // value status state
  const [isValid, setStatus] = useState(false)

  // checks if has been inserted a valid address
  useEffect(() => {
    setStatus(validPointers.some(point => point.name.toLowerCase() === value.toLowerCase()))
  }, [value])

  return {
    value,
    isValid,
    setValue: (value) => setValue(value)
  }
}