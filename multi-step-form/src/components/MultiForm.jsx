import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Form from './Form'
import MonthlyPlan from './MonthlyPlan'
import MonthlyAddOns from './MonthlyAddOns'
import MonthlyFinish from './MonthlyFinish'
import ThankYou from './ThankYou'

const MultiForm = () => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
  })

  
  const PageDisplay = () => {
    if (page === 0){
        return (
        <Form 
       page = {page}
       setPage = {setPage}
       formData = {formData}
       setFormData = {setFormData} />
       )
    }
    else if (page === 1){
        return (
            <MonthlyPlan 
             page = {page}
             setPage = {setPage}
             formData = {formData}
             setFormData = {setFormData}/>
        )
    }
    else if (page === 2){
        return (
        <MonthlyAddOns 
       page = {page}
       setPage = {setPage}
       formData = {formData} />
       )
    }
    else if (page === 3){
        return (
        <MonthlyFinish 
       page = {page}
       setPage = {setPage}/>
       )
    }
    
    else {
      return (
       <ThankYou />
      ) 
      
    }
    }

return (
    <div className='bg-blue-100 h-screen'>
      <div className='flex justify-center'>
        <div className='bg-white mt-10 shadow-lg'>
       <div className='flex justify-center bg-white mt-10'>
        <Sidebar />
      {PageDisplay()}
     </div>
     </div>
     </div>
     </div>
  )
}

export default MultiForm