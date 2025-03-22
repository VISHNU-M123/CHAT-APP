import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
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
