import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'

const AllBooking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { user } = useAuth()
  const { id } = useParams()
  const [booking, setBooking] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/addCamping/${id}`)
      .then((res) => res.json())
      .then((result) => setBooking(result))
  }, [id])
  const onSubmit = (data) => {
    data.email = user?.email
    data.title = booking?.title
    data.img = booking?.img
    data.description = booking?.description
    fetch('http://localhost:5000/allOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Booking Successfully')
          reset()
        }
      })

    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          {...register('place')}
          className="border rounded border-gray-500 m-4 w-1/3 py-2"
        >
          <option value="sajek">Sajek</option>
          <option value="sundorbon">Sundorbon</option>
          <option value="other">other</option>
        </select>
        <br />
        <input
          defaultValue="Yes"
          {...register('Confirmation')}
          className="border rounded border-gray-500 m-4 w-1/3 py-2"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input
          className="border rounded border-gray-500 hover:bg-green-200 px-3 py-2 text-xl font-semibold mb-4"
          type="submit"
        />
      </form>
    </div>
  )
}

export default AllBooking
