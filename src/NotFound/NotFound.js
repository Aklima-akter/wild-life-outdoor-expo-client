import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <img src="https://i.ibb.co/RSqD7Pv/404.jpg" alt="" />
      <Link to="/home">
        <button className="bg-white-300 outline-black my-2 px-3 hover:bg-yellow-300 font-medium">
          Go Back
        </button>
      </Link>
    </div>
  )
}

export default NotFound
