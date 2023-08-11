import React,{useState} from 'react'
import useForm from '../utils/useForm'
import axios from 'axios'
const Enquiry = () => {

    let initalState ={
        id:'',
        customerName:'',
        phoneNumber:'',
        interest:''
    }
    const callBack= () =>{
        axios.post('http://localhost:5050/enquiry',values)
            .then(response => response.statusText)
    }
   
    const {handleChange,onSubmit,values} = useForm(callBack,initalState)


  return (

    <div>
    
    <form onSubmit={onSubmit}>

<div className='form-group'>
        <label>Id</label>
        <input type='number' name="id" onChange={handleChange} className='form-control'/>
        </div>

        <div className='form-group'>
        <label>Customer Name</label>
        <input type='text' name="customerName" onChange={handleChange} className='form-control'/>
        </div>

        <div className='form-group'>
        <label>Phone Number</label>
        <input type='text' name="phoneNumber" onChange={handleChange} className='form-control'/>
        </div>

        <div className='form-group'>
        <label>Interest</label>
        <input type='text' name="interest" onChange={handleChange} className='form-control'/>
        </div>

        <div>
        <button  type='submit' className='btn btn-info'>Submit</button>
        </div>

    
    </form>
    </div>
  )
}

export default Enquiry


