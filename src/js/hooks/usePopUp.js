import { useEffect, useState } from "react";


/**
 * PopUp custom hook with show actions
 * @returns {{showPopUp: boolean, togglePopUp: (function(): void)}}
 */
export const usePopUp = () => {
  const [showPopUp, togglePopUp] = useState(false)

  useEffect(() => {

    const timerHide = setTimeout(() => {
      showPopUp ? togglePopUp(false) : null
    }, 3000)

    return () => clearTimeout(timerHide)
  }, [showPopUp])

  return {
    showPopUp,
    togglePopUp: () => togglePopUp(true)
  }
}