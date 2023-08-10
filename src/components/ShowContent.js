import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ShowContent = () => {
    const [tours,setTours] = useState([])
    const [hasErrors,setHasErrors] = useState(false)
  
    const fetchData= async () =>{

       
        try {
           let  response =   await axios.get('tourDb.json')

  //          axios.get('tourDb.json').then((resp)=>{setTours(resp.data)}).catch((error=>setHasErrors(true)) );
           setTours(response.data)

        } catch (error) {
            setHasErrors(true)
        }
    }

    const createElement = (tour,idx)=>{
        return(
            <div key={idx}>
                <img src={tour.image} alt={tour.id}/>
                <p>{tour.schedule}</p>
            </div>
        )
    }

    useEffect(  () => {
        fetchData()
    },[])
  return (
    <>
    { hasErrors && <p>error</p>}
    {
       <div className='cards'>
              { tours.map(createElement)}

       </div>
    }
    </>
  
    )
}

export default ShowContent