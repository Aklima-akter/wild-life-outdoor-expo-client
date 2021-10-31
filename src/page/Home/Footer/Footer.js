import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1  bg-gray-700  pb-9 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <h4 className="text-xl font-semibold p-6 text-gray-300 hover:text-white">
            This is Kamperen
          </h4>
          <p className="text-gray-300 hover:text-white">
            Kamperen is equipped with everythig
            <br /> required for an amazing campground <br />
            business website. Set up camp now.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold p-6 text-gray-300 hover:text-white">
            Contact
          </h4>
          <p className="text-gray-300 hover:text-white">
            <strong className="p-4">Address</strong>
          </p>
          <p className="text-gray-300 hover:text-white">
            House-12,Road-4,
            <br /> Banasree,Rampura,Dhaka
          </p>
          <p className="text-gray-300 hover:text-white">
            <strong>Phone:</strong>+88017444444
          </p>
          <p className="text-gray-300 hover:text-white">
            <strong>Email:</strong>tentcamping@gmail.com
          </p>
        </div>
      </div>
      <hr />
      <div className="bg-gray-700 grid grid-cols-1  py-12 lg:grid-cols-2">
        <div>
          <p className="text-gray-300 hover:text-white">
            Terms of Use I Privacy Policy
          </p>
        </div>
        <div>
          <p className="text-gray-300 hover:text-white">
            © 2021 Qode Interactive, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
