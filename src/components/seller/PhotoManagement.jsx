import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ImageAdd from '../ImageAdd'

const PhotoManagement = () => {
  return (
    <div className='flex flex-col sm:rflex-row'>
        {/* Dashboard header will be here */}
        <DashboardHeader/>
        {/* Image add component will be here */}
        <ImageAdd/>
    </div>
  )
}

export default PhotoManagement