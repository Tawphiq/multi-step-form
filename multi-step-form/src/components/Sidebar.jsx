import React from 'react'



const Sidebar = () => {
  return (
    <div className="bg-bg-sidebar bg-cover
     rounded -mt-8 mb-2 ml-2 shadow-md">
    
        <div className="mb-4 ml-2 mr-20">
          <div className='mt-3'>
        <span className='text-gray-300 text-xs'>STEP 1 </span> <br />
        <span className='text-white text-sm font-semibold'>YOUR INFO</span>
        </div>
        <div className='mt-3'>
        <span className='text-gray-300 text-xs'>STEP 2 </span> <br />
        <span className='text-white text-sm font-semibold'> SELECT PLAN</span>
        </div>
        
        
        <div className='mt-3'>

      <span className='text-gray-300 text-xs'> STEP 3 </span> <br />
      <span className='text-white text-sm font-semibold'>ADD-ONS</span>
      </div>

      <div className='mt-3'>

      <span className='text-gray-300 text-xs'>STEP 4 </span> <br />
      <span className='text-white text-sm font-semibold'>SUMMARY</span>
      </div>

      </div>
      
    </div>
  )
}

export default Sidebar