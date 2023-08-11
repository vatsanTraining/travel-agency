import React,{useState} from 'react'
import {Field,Formik,Form} from 'formik'

const Reservation = () => {
  return (
    <div>
<Formik initialValues={{name:'',email:''}} 
            onSubmit={(values) =>{ console.log(JSON.stringify(values))}}>

    <Form> 

        <label>Name</label>
        <Field type="text" name="name" placeholder='enter the name' required='required'/>
        
        <label>Email</label>
        <Field type="text" name="email"/>

   
        <button type="submit">Submit</button>

        
    </Form>
</Formik>

    </div>
  )
}

export default Reservation