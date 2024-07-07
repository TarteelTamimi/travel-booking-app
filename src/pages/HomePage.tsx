import { useEffect } from "react"
import { api } from "../services/api"

const HomePage = () => {
  useEffect(() => {
    api.get('/api/cities')
    .then(res => res.data)
    .then(console.log)
    
  }, [])
  return (
    <div>
      <h1>Home Page</h1>      
    </div>
  )
}

export default HomePage
