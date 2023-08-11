import { useState } from "react";


const useForm = (callBack,initalState) =>{

const [values,setValues] =useState(initalState);
    
    const handleChange= (event) =>{
        setValues({...values,[event.target.name]:event.target.value})
    }

    const onSubmit = (event) =>{
            event.preventDefault();
            callBack();
        }
    return {
        values,
        handleChange,
        onSubmit
    }

   
}

export default useForm;