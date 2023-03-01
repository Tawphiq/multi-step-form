import React from 'react'

const MonthlyFinish = ({page, setPage}) => {
  return (
    <div>
        <div className='ml-10 mr-10 mb-5 -mt-3'>
            <div className='text-blue-800 text-xl font-bold'>Finishing Up</div>
            <div className='text-xs text-gray-400'>Double check everything looks OK before confirming</div>
            <div className='bg-gray-100 rounded mt-5'>

                
            <div className='grid grid-cols-2 p-3'>
            <div className='ml-2'>
            <div className='text-blue-800 text-sm font-semibold'>Arcade(Monthly)</div>
            <a href='#' className='text-gray-400 text-sm underline'>change</a>
            </div>
            <div className='text-blue-800 text-sm font-semibold ml-16'>$9/mo</div>
            </div>
            <hr />
                    

                <div>
                    <div className='grid grid-cols-2 p-2'>
                        <div className='text-gray-400 text-sm font-semibold ml-2'>Online Service</div>
                        <div className='text-blue-800 text-sm ml-16'>+$1/mo</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='text-gray-400 text-sm font-semibold ml-4 mb-3'>Larger Storage</div>
                        <div className='text-blue-800 text-sm ml-16'>+$2/mo</div>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-2 mt-5'>
                <div className='text-gray-400 text-sm font-semibold ml-4'>Total(per month)</div>
                <div className='text-blue-600 text-sm ml-16 font-bold'>$12/mo</div>
            </div>

            <div className='grid grid-cols-2 gap-20 mt-10'>
          <button type='button' className='text-gray-400 font-semibold text-sm hover:text-gray-500'
          onClick={()=>{setPage(page - 1)}}>Go back</button>
          <button type='button' className='bg-blue-800 p-1 rounded text-sm w-20 text-white hover:bg-blue-900'
          onClick={()=>{setPage(page + 1)}}>Confirm</button>
        </div>

        </div>
    </div>
  )
}

export default MonthlyFinish