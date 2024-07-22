import React, { useState } from 'react'
import { MdViewInAr } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
function Navbar() {
  const [sideon,setsideon]=useState(false);
  return (
    <div className='bg-blue-100 p-2 flex flex-row justify-between transition-all items-center px-10 '>
      <div onClick={()=>{setsideon(sideon?false:true)}} className='p-1 text-3xl transition-all bg-gradient-to-br from-blue-400 via-purple-500 rounded-md to-voilet-500'>
        {sideon?  <MdCancel className=''/> :<IoMenuOutline></IoMenuOutline>}
      
     
      </div>
        <div className='flex  text-white '>
            <MdViewInAr className='text-blue text-[40px]  rounded-md bg-gradient-to-r from-violet-500 via-purple-500 to-purple-800'/>
            <p className=' flex text-xl'><span className='text-violet-500'>g</span> <span className='text-amber-500'>te</span> <span className='text-blue-950'>x</span></p>
        </div>
         <div>
            <FaUserCircle className='text-3xl rounded-full text-white bg-gradient-to-r from-violet-500 via-purple-500 to-purple-800' />
         </div>
    </div>
  )
}

export default Navbar   
