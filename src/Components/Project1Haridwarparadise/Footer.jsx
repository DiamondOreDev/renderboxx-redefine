import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-center items-center py-3 text-gray-50 bg-p1'>
      <p className='text-lg headingp1'>Project By <Link to={'/'} className='p1 hover:underline  hover:text-gray-100'>Redefine Group</Link></p>
    </div>
  )
}

export default Footer
