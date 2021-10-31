import React, { useEffect, useState } from 'react'
import Camp from '../Camp/Camp'

const Camping = () => {
  const [campings, setCampings] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/addCamping')
      .then((res) => res.json())
      .then((data) => {
        setCampings(data)
      })
  }, [])
  return (
    <div>
      <h2 className="text-4xl m-3 font-semibold my-20 py-16">
        Welcome to
        <br className="mb-3" /> Wildlands
        <br /> Camping Ground
      </h2>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 lg:ml-14 ">
        {campings.map((camping) => (
          <Camp key={camping._id} camping={camping}></Camp>
        ))}
      </div>
    </div>
  )
}

export default Camping
