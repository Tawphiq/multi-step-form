import React from 'react'

const MonthlyAddOns = ({page, setPage}) => {
  return (
    <div>

     <div className='ml-10 mr-10 mb-5 -mt-3'>
        <div className='text-xl text-blue-800 font-bold'>Pick Add-ons</div>
        <div className='text-xs text-gray-400'>Add-ons help enhance your gaming experience</div>
        
        {/* Cards */}
        <div className='mt-5 flex flex-col gap-3 mb-10'>
            <div className='form-check border rounded shadow h-14 p-3 cursor-pointer hover:border-blue-800 hover:bg-gray-100'>
              <input type='checkbox' className='form-check-input w-3 h-3 border border-gray-300 rounded
               bg-white bg-contain'/>
               <div className='flex'>
               <div className='ml-5 -mt-8'>
               <label className='text-blue-800 font-semibold text-sm'>Online Service</label>
               <div className='text-xs text-gray-400'>Access to multiplayer games</div>
               </div>
               <div className='text-xs text-blue-800 ml-10 p-1 -mt-5'>+$1/mo</div>
              </div>
            </div>

            <div className='form-check border rounded shadow h-14 p-3 cursor-pointer hover:border-blue-800 hover:bg-gray-100'>
            <input type='checkbox' className='form-check-input w-3 h-3 border border-gray-300 rounded
               bg-white bg-contain'/>
               <div className='flex'>
               <div className='ml-5 -mt-8'>
               <label className='text-blue-800 font-semibold text-sm'>Larger Storage</label>
               <div className='text-xs text-gray-400'>Extra 1TB of cloud save</div>
               </div>
               <div className='text-xs text-blue-800 ml-16 -mt-5 p-1'>+$2/mo</div>
               </div>
            </div>

            <div className='form-check border rounded shadow h-14 p-3 cursor-default hover:border-blue-800 hover:bg-gray-100'>
            <input type='checkbox' className='form-check-input w-3 h-3 border border-gray-300 rounded
               bg-white bg-contain cursor-pointer'/>
               <div className='flex'>
               <div className='ml-5 -mt-8'>
               <label className='text-blue-800 font-semibold text-sm'>Customizable Profile</label>
               <div className='text-sm text-gray-400'>Custom theme on your profile</div>
               </div>
               <div className='text-xs text-blue-800 -mt-5'>+$2/mo</div>
               </div>
            </div>
        </div>

        <div className='grid grid-cols-2'>
          <button type='button' className='text-gray-400 font-semibold mr-10 text-sm hover:text-gray-500'
          onClick={()=>{setPage(page - 1)}}>Go back</button>
          <button type='button' className='bg-blue-800 p-1 rounded text-sm ml-10 w-20 text-white hover:bg-blue-900'
          onClick={()=>{setPage(page + 1)}}>Next Step</button>
        </div>
         
     </div>

    </div>
  )
}

export default MonthlyAddOns