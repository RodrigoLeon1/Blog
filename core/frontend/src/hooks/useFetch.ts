import { useEffect, useState } from 'react'
import { Http } from '../utils/enum/http/Http'

const useFetch = <T extends unknown>(endpoint: string, method: Http) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const url = `${process.env.REACT_APP_LOCAL_ENDPOINT}/${endpoint}`
    fetch(url, {
      method,
    })
      .then((response) => response.json())
      .then((object) => {
        if (object.status >= 400 && object.status <= 500) {
          setError(true)
        } else {
          setData(object.data)
        }
      })
      .finally(() => setIsLoading(false))
  }, [])

  return {
    data,
    error,
    isLoading,
  }
}

export default useFetch
