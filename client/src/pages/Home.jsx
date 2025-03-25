import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {

  const fetchUserDetails = async () => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/api/user-details`
      const response = await axios({
        url:URL,
        withCredentials:true
      })

      console.log('current user details', response)
    } catch (error) {
      console.log('error',error)
    }
  }

  useEffect(() => {
    fetchUserDetails()
  },[])
  return (
    <div>
      home page
      {/* message component */}
      <section>
        <Outlet/>
      </section>
    </div>
  )
}

export default Home
