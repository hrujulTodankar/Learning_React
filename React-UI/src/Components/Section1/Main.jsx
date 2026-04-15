import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Main = (props) => {
  return (
    <div className='flex items-center gap-10 px-8 py-10 h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Main
