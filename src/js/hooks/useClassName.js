import { useEffect, useState } from "react";


/**
 * Hooks used to manage status classes like enabled/disabled, active/inactive
 * @param classOption
 * @param boolCondition
 * @returns {string}
 */
export const useClassName = (classOption, boolCondition) => {

  const [className, setClassName] = useState('')

  useEffect(() => {
    setClassName(boolCondition ? classOption : '')
  }, [boolCondition])

  return className
}