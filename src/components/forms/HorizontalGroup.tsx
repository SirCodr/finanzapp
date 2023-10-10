import React from 'react'

const HorizontalGroup = ({ children }) => {
  return (
    <div className='flex gap-x-4'>
      {children}
    </div>
  )
}

export default HorizontalGroup
