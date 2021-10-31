import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

//bg-black py-4 text-white text-xl
const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div>
      <nav className="bg-black py-4 text-white text-xl hover:bg-gray-400 ">
        <NavLink
          to="/home"
          className="mx-8 block pb-2 md:inline-block lg:inline-block "
        >
          Home
        </NavLink>
        <NavLink
          to="/myBooking"
          className="mx-8 block pb-2 md:inline-block lg:inline-block"
        >
          My Booking
        </NavLink>
        <NavLink
          to="/addcamping"
          className="mx-8 block pb-2 md:inline-block lg:inline-block"
        >
          Add Camping
        </NavLink>
        <NavLink
          to="/manageAllOrder"
          className="mx-8 block pb-2 md:inline-block lg:inline-block"
        >
          Manage All Booking
        </NavLink>
        <NavLink
          to="/login"
          className="mx-8 block pb-2 md:inline-block lg:inline-block"
        >
          Login
        </NavLink>
        <span>{user?.displayName} </span>
        {user?.email && (
          <button onClick={logOut} className="bg-green-400 px-3 py-1 rounded">
            Log Out
          </button>
        )}
      </nav>
    </div>
  )
}

export default Header
