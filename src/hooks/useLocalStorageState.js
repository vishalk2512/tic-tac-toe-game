import { useEffect, useState } from 'react'

const useLocalStorageState = (key, defaultValue = null) => {
  if (typeof key !== 'string') {
    throw new Error('The key parameter must be a string')
  }

  const [state, setState] = useState(() => {
    // fix for ssr
    if (typeof window === 'undefined') {
      return defaultValue
    }

    try {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue
    } catch (err) {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}

export default useLocalStorageState
