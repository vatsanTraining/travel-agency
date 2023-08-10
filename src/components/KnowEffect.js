import React,{useState,useEffect} from 'react'

export const KnowEffect = () => {
    const [count,setCount] =useState(1);
    const [calculation,setCalculation] = useState(0)
  
    useEffect(() => {

         setCalculation(() => count *2)
        console.count('effect called');
     return () =>{ console.log("unmount")}
   }, [count])
  
    return (
        <div>
        <h1>Calculation:={calculation}</h1>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(prev => prev+1)}>onClick</button>
        </div>
    )

  }
  
  export default KnowEffect

  // component didMount empty []
  // component didupdate pass dependcies
  // componet  didunmount return function
  //return () =>{ console.log('unmount')}
