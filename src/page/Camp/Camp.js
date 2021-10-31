import React from 'react'
import { Link } from 'react-router-dom'

const Camp = (props) => {
  // console.log(props.camping)
  const { _id, title, img, description } = props.camping
  return (
    <div className="max-w-xs mb-4 mx-auto">
      <img className="w-80 md:max-w-full lg:max-w-full " src={img} alt="" />
      <h3>{title}</h3>
      <p>{description.slice(0, 100)}</p>
      <Link to={`camp/${_id}`}>
        <button className="bg-white-300 outline-black my-2 px-3 hover:bg-yellow-300 font-medium">
          Book Now
        </button>
      </Link>
    </div>
  )
}

export default Camp
