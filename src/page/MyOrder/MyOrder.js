import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import swal from 'sweetalert'

const MyOrder = () => {
  const [allOrders, setAllOrders] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    fetch(`https://dark-alien-02734.herokuapp.com/allOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data))
  }, [user.email])
  console.log(allOrders)

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
          const remainingOrder = allOrders.filter(
            (allOrder) => allOrder._id !== id,
          )

          setAllOrders(remainingOrder)
        }
      })
  }
  return (
    <>
      {allOrders.length > 1 ? (
        <div>
          <h2 className="text-4xl m-3 font-semibold my-11 py-11">
            My All Booking: {allOrders.length}
          </h2>
          <table className="table-auto m-10">
            <thead>
              <tr className="border-2">
                <th className="w-1/5 border">#</th>
                <th className="w-1/5 border">Event Title</th>
                <th className="w-1/3 border">Event description</th>
                <th className="w-1/5 border">Action</th>
              </tr>
            </thead>
            {allOrders.map((allData, index) => (
              <tbody className="mb-4">
                <tr className="border">
                  <td className="border">{index}</td>
                  <td className="border text-red-400">{allData.title}</td>
                  <td className="border p-3">{allData.description}</td>
                  <button
                    onClick={() => handleDeleteOrder(allData._id)}
                    className="border rounded border-gray-500 hover:bg-green-200 px-3 py-2 text-xl font-semibold mb-4 mt-9"
                  >
                    Delete
                  </button>
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

export default MyOrder
