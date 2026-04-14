import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Main = () => {
  return (
    <div className='flex items-center gap-10 px-8 py-10 h-[90vh]'>
      <LeftContent />
      <RightContent/>
    </div>
  )
}

export default Main
