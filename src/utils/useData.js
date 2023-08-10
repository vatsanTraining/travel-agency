import { useState ,useEffect} from "react";
import axios from "axios";
const useData = (url)=>{

    const [data, setData] = useState([]);

    const fetchData= async () =>{
       
            let  response =   await axios.get(url)
             setData(response.data)

             }
             useEffect(()=>{
                 fetchData()
             },[])

             return {data};

}

export default useData