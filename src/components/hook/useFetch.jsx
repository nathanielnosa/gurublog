import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error({ "Error": "Bad Serer request" })
        }
        return res.json()
      })
      .then(data => {
        setBlogs(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(e => {
        setError(e.message)
        setIsLoading(false)
      })
  }, [])

  return {
    blogs, isLoading, error
  }


}

export default useFetch