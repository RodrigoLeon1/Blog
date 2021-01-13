import { useEffect, useState } from 'react'
import { Http } from '../utils/enum/http/Http'

const useFetch = <T extends unknown>(endpoint: string, method: Http) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `${process.env.REACT_APP_LOCAL_ENDPOINT}/${endpoint}`
    fetch(url, {
      method,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error fetching data')
        return response.json()
      })
      .then((data: any) => setData(data.data))
      .catch((err) => setError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    data,
    error,
    isLoading,
  }
}

export default useFetch
