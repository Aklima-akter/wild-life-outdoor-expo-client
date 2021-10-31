// import React from 'react'

// const Order = (props) => {
//   //   console.log(props.allOrder)
//   const { img, title, description, place, confirmation } = props.allOrder
//   console.log(props.allOrder._id)

//   //DELETE AN ORDER
//   const handleDeleteOrder = (id) => {
//     const url = `http://localhost:5000/allOrder/${id}`
//     fetch(url, {
//       method: 'delete',
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result)
//         if (result.deletedCount > 0) {
//           alert('Deleted Seccesfully')
//           const remainingOrder = allOrders.filter((allOrder) => allOrder !== id)
//           setAllOrders(remainingOrder)
//         }
//       })
//     console.log(id)
//   }
//   return (
//     <div>
//       <div className="max-w-xs mb-4">
//         <img className="" src={img} alt="" />
//         <h3>{title}</h3>
//         <h3>{place}</h3>
//         <h3>Confirmation: {confirmation}</h3>
//         <p>{description.slice(0, 100)}</p>

//         <button
//           onClick={() => handleDeleteOrder(props.allOrder._id)}
//           className="bg-white-300 outline-black my-2 px-3 hover:bg-yellow-300 font-medium"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Order
