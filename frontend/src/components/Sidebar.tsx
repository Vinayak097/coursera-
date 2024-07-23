import React from 'react'
import { sideSelect } from '../atoms/sideAtom'
import { useRecoilValue } from 'recoil'
function Sidebar() {
    const sideSelected=useRecoilValue(sideSelect);    
  return (
    <div className='  bg-neutral dark:text-white'>
        <div className='h-screen  text-xl flex flex-col items-center gap-2 '>
            <h2 className='shadow p-2 mt-10'>Courses</h2>
            <h2 className='p-2 shadow'>purchases</h2>
            <h2 className='p-2 shadow'>History</h2>
        </div>
    </div>
  )
}

export default Sidebar
