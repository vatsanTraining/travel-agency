import React from 'react'
import useData from '../utils/useData'
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

       </div>
  )
}

export default ShowReview