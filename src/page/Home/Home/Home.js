import React from 'react'
import Camping from '../../Camping/Camping'
import Activity from '../Acitivity/Activity'
import Banner from '../Banner/Banner'
import CampingFacilities from '../CampingFacilities/CampingFacilities'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Camping></Camping>
      <Activity></Activity>
      <CampingFacilities></CampingFacilities>
    </div>
  )
}

export default Home
