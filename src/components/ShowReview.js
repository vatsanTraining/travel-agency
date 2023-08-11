import React from 'react'
import useData from '../utils/useData'
import { Link,useParams } from 'react-router-dom'
import Home from './Home'
const ShowReview = () => {

    let reviews = useData("reviews.json")
    const createElement = (review,idx)=>{
      return(
          <div key={idx}>
              <p>{review.comment}</p>
              <p>{review.reviewer}</p>

          </div>
      )
  }
  return (
    <div className='cards'>
              { reviews.data.map(createElement)} 
              <Link to="/">Home</Link>
       </div>
  )
}

export default ShowReview