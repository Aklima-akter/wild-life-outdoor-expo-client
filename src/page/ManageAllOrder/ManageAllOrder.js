import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

const ManageAllOrder = () => {
  const [allOrder, setAllOrder] = useState([])
  // console.log(allOrder)

  useEffect(() => {
    fetch('https://dark-alien-02734.herokuapp.com/allOrder')
      .then((res) => res.json())
      .then((data) => {
        setAllOrder(data)
      })
  }, [])

  //Update an order
  const handleOrder = (id) => {
    swal({
      title: 'Are you sure',
      test: 'Once Approved, you will not be able to Cancel this Order!',
      icon: 'warning',
      buttons: 'true',
      dangerMode: 'true',
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://dark-alien-02734.herokuapp.com/allOrder/${id}`
        fetch(url, {
          method: 'PUT',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              swal('Order Approved', {
                icon: 'success',
              })
            }
          })
      } else {
        swal('Approved Closed')
      }
    })
  }

  //DELETE AN ORDER
  const handleDeleteOrder = (id) => {
    const url = `https://dark-alien-02734.herokuapp.com/allOrder/${id}`
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.deletedCount > 0) {
          swal('Deleted', 'Delete Successfully', 'success')
          const remainingOrder = allOrder.filter((order) => order._id !== id)

          setAllOrder(remainingOrder)
        }
      })
  }
  return (
    <>
      {allOrder.length > 1 ? (
        <div>
          <h2 className="text-4xl m-3 font-semibold my-11 py-11">
            Manage All Booking:{allOrder.length}
          </h2>
          <table className="">
            <thead>
              <tr className="border-2">
                <th className="w-1/12 border">#</th>
                <th className="w-1/5 border">Event Title</th>
                <th className="w-1/3 border">Event description</th>
                <th className="w-1/5 border">Order Status</th>
                <th className="w-1/5 border">Action</th>
              </tr>
            </thead>
            {allOrder.map((allData, index) => (
              <tbody className="mb-4">
                <tr className="border">
                  <td className="border">{index}</td>
                  <td className="border text-red-400">{allData.title}</td>
                  <td className="border p-3">{allData.description}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => handleOrder(allData._id)}
                      className="border rounded border-gray-500 hover:bg-green-200 px-3 py-2 text-xl font-semibold mb-4 mt-9"
                    >
                      Confirm Here
                    </button>
                  </td>
                  <td className="border p-3">
                    <button
                      onClick={() => handleDeleteOrder(allData._id)}
                      className="border rounded border-gray-500 hover:bg-green-200 px-3 py-2 text-xl font-semibold mb-4 mt-9"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ManageAllOrder
