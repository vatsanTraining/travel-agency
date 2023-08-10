import React,{useState,useEffect} from 'react'

const KnowEffect = ({firstName}) => {
    const [name,setName] =useState(firstName);
    useEffect(() => {
        setName('Hi' +firstName);
    },[])
  return (
     <h1>{firstName}</h1>
    )
}

export default KnowEffect;