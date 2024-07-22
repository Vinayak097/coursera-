import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='max-w-[210px] transition-all'>
          <Sidebar></Sidebar>
        </div>
    </div>
  )
}

export default Home