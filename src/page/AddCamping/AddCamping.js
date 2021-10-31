import React from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'

const AddCamping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  //   console.log(watch)
  const onSubmit = (data) => {
    fetch('https://dark-alien-02734.herokuapp.com/addCamping', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Good job!', 'Added Successfully!', 'success')
          // console.log(result.insertedId)
          reset()
        }
      })
    console.log(data)
  }
  return (
    <div className="">
      <h2 className="text-3xl m-3 font-semibold">Add Camping</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue=""
          {...register('title')}
          className="border rounded border-gray-500 m-4 w-1/3 py-2"
          placeholder="title"
        />
        <br />
        <input
          {...register('description', { required: true })}
          className="border rounded border-gray-500 w-1/3 py-2"
          placeholder="Description"
        />

        <br />
        <input
          defaultValue=""
          {...register('img')}
          className="border rounded border-gray-500 m-4 w-1/3 py-2"
          placeholder="img"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="border rounded border-gray-500 hover:bg-green-200 px-3 py-2 text-xl font-semibold"
          type="submit"
        />
      </form>
    </div>
  )
}

export default AddCamping
