import React, {useState} from 'react'

const Form = ({page, setPage, formData, setFormData }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [error, setError] = useState('false')
    

    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length == 0 || email.length == 0 || phoneNum.length == 0){
            setError(true)
        }
        }

    const handleClick = (e) => {
        e.preventDefault
        if(name.length == 0 || email.length == 0 || phoneNum.length == 0){
          page 
        }
        else {setPage(page + 1)}
        }

    return (
    <div>
        <form className='ml-10' onSubmit={handleSubmit}>
          <div className='text-lg font-bold text-blue-800 -mt-3'>Personal Info</div>
            <span className='text-xs text-gray-400 mb-5 -mr-5'>
                Please provide your name, 
                email address and phone number
            </span>

            <div className='mt-3'>
            <label className='text-blue-800 font-semibold text-sm'>
                Name
            </label>
            {error && name.length <= 0 ?
                 <label className='text-red-500 text-xs ml-28'>This field is required</label>: ""}
            <div>
                <input id='name' type="text" name="name"
                 placeholder='eg. Tawfiq Iddrisu'
                 required
                 className='w-64 text-sm border rounded text-blue-800
                  focus:border-blue-500 p-1
                  focus:outline-none hover:border-blue-700'
                  onChange={(e) => setName(e.target.value)}
                  />
                  
                </div>
                
            </div>

             <div className='mt-2 mb-2'>   
            <label className='text-blue-800 font-semibold text-sm'>
                Email Address
            </label>
            {error && email.length <= 0 ?
                 <label className='text-red-500 text-xs ml-16'>This field is required</label>: ""} 
            <div>
                <input id='email' type="email" name="email" 
                placeholder='eg. Tawphiq@outlook.com'
                required
                className='text-sm text-blue-800 w-64 border rounded  focus:border-blue-500 p-1
                focus:outline-none
                hover:border-blue-800'
                onChange={e => setEmail(e.target.value)}
                />
                
                </div>
                
            </div>
            
            <div>
            <label className='text-blue-800 font-semibold text-sm'>
                Phone Number
                
            </label>
            {error && phoneNum.length <= 0 ?
                 <label className='text-red-500 text-xs ml-14'>This field is required</label>: ""}
            <div>
                <input id='phone' type="text" name="phone" 
                placeholder='eg. +233 555 133 173'
                required
                className='peer text-sm w-64 border rounded focus:border-blue-500 p-1
                focus:outline-none text-blue-800
                hover:border-blue-800'
                onChange={e => setPhoneNum(e.target.value)}
                />
                
                </div>
                
                </div>

            <button className='bg-blue-800 rounded
             text-white shadow-lg mt-10 mb-5 px-2.5 py-1
             text-sm ml-44'
             onChange={e => setPage(e.target.value)}
            onClick={handleClick}>
                Next Step</button>
                
        </form>
    </div>
  )
}

export default Form

